import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login__left"></div>
      <div className="login__right">
        <nav className="login__navigation">
          <div className="login_logo">CONVERGE</div>
          <div className="login__menu">
            <img src="https://img.icons8.com/material-outlined/24/000000/menu.png" />
          </div>
        </nav>
        <div className="login__header">
          <p className="welcome">Welcome.</p>
          <p className="start">Let's Get Started</p>
        </div>
        <form>
          <div className="login__email">
            <label className="email">Email</label>
            <input name="email" type="text" />
          </div>
          <div className="login__password">
            <label className="password">Password</label>
            <input name="password" type="password" />
            <a href="/" className="login__forgot">
              Forgot Password ?
            </a>
          </div>
        </form>
        <div className="login__footer">
          <button className="login__button">Login</button>
          <p className="login__text">
            Don't have an account?
            <span>
              <a className="login__textLink" href="/">
                Sign Up
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
