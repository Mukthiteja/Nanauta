import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css"; // Use CSS Modules for styling

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/api/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password, 
          location: credentials.geolocation,
        }),
      });
      const json = await response.json();
      console.log(json); // Handle the response as needed

      if (json.success) {
        alert("User created successfully");
      } else {
        alert(json.message); // Display the error message from the server
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the user.");
    }
  };

  return (
    <div className={styles.container}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={credentials.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="geolocation">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="geolocation"
                    value={credentials.geolocation}
                    onChange={handleChange}
                    placeholder="Enter location"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="m-3 w-10 btn btn-success">
                  Submit
                </button>
                <small>Or</small>
                <Link to="/login" className="m-3 btn btn-danger">
                  Already a user
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
