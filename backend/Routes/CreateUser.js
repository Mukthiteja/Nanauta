import express from 'express';
import User from '../models/User.js';  // Ensure the path and model name are correct
import bcrypt from 'bcryptjs';  // For hashing passwords
import jwt from 'jsonwebtoken';  // For generating tokens (optional)

const router = express.Router();
const saltRounds = 10;  // For password hashing
const jwtSecret = 'your_jwt_secret'; 

// Route to create a new user
router.post('/createuser', async (req, res) => {
  try {
    const { name, email, password, location } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user if email does not exist
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      geolocation: location,
    });

    const savedUser = await newUser.save();
    res.json({ success: true, user: savedUser });
  } catch (err) {
    console.error('Error creating user:', err);  // Improved logging
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Generate a token (optional)
    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

    // Respond with success and token (if using JWT)
    res.json({ success: true, token });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

export default router;
