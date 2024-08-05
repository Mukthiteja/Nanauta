import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // For redirection
import styles from "./Login.module.css"; // Use CSS Modules for styling

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // For redirection

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const json = await response.json();
      console.log(json); // Handle the response as needed

      if (json.success) {
        // Redirect to home page on successful login
        navigate("/");
      } else {
        alert(json.message); // Display the error message from the server
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className={styles.container}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleSubmit}>
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
                  Login
                </button>
                <small>Or</small>
                <Link to="/SignUp" className="m-3 btn btn-danger">
                  Create an account
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
