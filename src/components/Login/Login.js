import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Header from '../Header/header.component';
import Footer from '../Footer/Footer';

const Login = () => {
	return (
		<section>
			<Header />

			<div className="login">
				<div className="login__left" />
				<div className="login__right">
					<nav className="login__navigation">
						<div className="login_logo">CONVERGE</div>
						<div className="login__menu">
							<img src="https://img.icons8.com/material-outlined/24/000000/menu.png" alt="menu" />
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
								<Link to="/signup" className="login__textLink">
									Sign Up
								</Link>
							</span>
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
};

export default Login;
