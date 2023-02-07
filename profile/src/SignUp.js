import React, { useState } from "react";
// import { Link, Route, Switch } from "react-router-dom";

// import SignIn from "./SignIn";
// import SignUp from "./SignUp";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // perform sign-up logic, such as sending the data to a server, here
  };

  return (
    <div className="SignUpPage">
        <h2 className="SignUpPage-title">Sign-Up a New Account</h2>

        <form onSubmit={handleSubmit}>
            <div className="SignUpPage-form-field">
                <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="User Name"
                />
            </div>
            <div className="SignUpPage-form-field">
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                />
            </div>
            <div className="SignUpPage-form-field">
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="*********"
                />
            </div>
            <button type="submit">Sign up</button>
            </form>
            {/* <a href="#">Forgot password?</a> */}

            <div className="sign-in">
            <p>Already have an Account <a href="./SignIn">SignIn here</a></p>
                <nav>
                    <a href="#!">Terms of use.</a>
                    <a href="#!">Privacy policy</a>
                </nav>
            </div>
    </div>
    
  );
};

export default SignUp;
