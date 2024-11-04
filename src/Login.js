import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [role, setRole] = useState(""); // To store the selected role (student/teacher)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation

  // Handle role selection
  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setError(""); // Clear errors when role changes
  };

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Simulate different login flows based on role
    if (role === "student") {
      // Redirect to student dashboard
      navigate("/student-dashboard");
    } else if (role === "teacher") {
      alert("Teacher Login successful!");
      // Redirect to teacher-specific page here
    } else {
      setError("Please select your role (Student or Teacher).");
    }
  };

  return (
    <div className={`login-page ${role === "" ? "role-selection-bg" : ""}`}>
      <div className="background-overlay"></div>
      <div className="login-card">
        {role === "" ? (
          <>
            <h2 className="login-title">Who are you?</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="role-selection">
              <button
                className="role-button"
                onClick={() => handleRoleSelection("student")}
              >
                Student
              </button>
              <button
                className="role-button"
                onClick={() => handleRoleSelection("teacher")}
              >
                Teacher
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="login-title">
              {role === "student" ? "Student Login" : "Teacher Login"}
            </h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <p className="back-link" onClick={() => setRole("")}>
              Back to role selection
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
