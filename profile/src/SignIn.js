import React, { useState } from "react";
import axios from "axios";
import './style.css';


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/signin", { email, password });
      localStorage.setItem("token", response.data.token);
      window.location = "/dashboard";
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="sign-in">
      <h1>Welcome back</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <a href="#">Forgot password?</a>

      <div className="sign-in">
            <p>Do not have an Account <a href="./SignUp">SignUp here</a></p>
                {/* <nav>
                    <a href="#!">Terms of use.</a>
                    <a href="#!">Privacy policy</a>
                </nav> */}
            </div>
    </div>
  );
};

export default SignIn;
