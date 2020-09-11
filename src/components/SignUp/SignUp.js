import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import Header from '../Header/header.component';
import Footer from '../Footer/Footer';

const SignUp = () => {
	return (
		<section>
			<Header />

			<div className="signUp">
				<div className="signUp__left" />
				<div className="signUp__right">
					<nav className="signUp__navigation">
						<div className="signUp_logo">CONVERGE</div>
						<div className="signUp__menu">
							<img src="https://img.icons8.com/material-outlined/24/000000/menu.png" alt="menu" />
						</div>
					</nav>
					<div className="signUp__header">
						<p className="welcome">Okay! Let's get you connected.</p>
						<p className="start">Just a few details</p>
					</div>
					<div className="form">
						<form className="signUp__form">
							<div className="names">
								<div className="signUp_firstName">
									<label for="signUp__firstName">First Name</label>
									<br />
									<input name="signUp__lastName" type="text" />
								</div>
								<div className="signUp_firstName">
									<label for="signUp__lastName">Last Name</label>
									<br />
									<input name="signUp__lastName" type="text" />
								</div>
							</div>
							<div className="email_and_gender">
								<div className="signUp_email">
									<label for="signUp__email">Email</label>
									<br />
									<input name="signUp__email" type="email" />
								</div>
								<div className="signUp_gender">
									<label for="signUp__gender">Gender</label>
									<br />
									<select name="signUp__gender" id="gender">
										<option value="Male">Male</option>
										<option value="Female">Female</option>
									</select>
								</div>
							</div>
							<div className="residence">
								<div className="signUp_birth">
									<label for="signUp_birth">Date of Birth</label>
									<br />
									<input name="signUp_birth" type="date" />
								</div>
								<div className="signUp_country">
									<label for="signUp_country">Country</label>
									<br />
									<input name="signUp_country" type="text" />
								</div>
								<div className="signUp_state">
									<label for="signUp_state">State</label>
									<br />
									<input name="signUp_state" type="text" />
								</div>
							</div>
							<div className="passwords">
								<div className="signUp_password">
									<label for="signUp_password">Password</label>
									<br />
									<input name="signUp_password" type="password" />
								</div>
								<div className="signUp_confirmPassword">
									<label for="signUp_confirmPassword">Confirm Password</label>
									<br />
									<input name="signUp_confirmPassword" type="password" />
								</div>
							</div>
						</form>
					</div>

					<div className="signUp__footer">
						<button className="signUp__button">SIGN UP</button>
						<p className="signUp__text">
							Have an account?
							<span>
								<Link to="/login" className="signUp__textLink">
									Sign In
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

export default SignUp;

// <div className="form">
// <form className="signUp__form">
//   <div className="signUp__names">
//     <div className="signUp__firstName">
//       <label className="firstName">First Name</label>
//       <input name="firstName" type="text" />
//     </div>
//     <div className="signUp__lastName">
//       <label className="lastName">Last Name</label>
//       <input name="lastName" type="text" />
//     </div>
//     <div className="signUp__lastName"></div>
//   </div>
//   <div className="signUp__form2">
//     <div className="signUp__email">
//       <label className="email">Email</label>
//       <input name="email" type="email" />
//     </div>
//     <div className="signUp__age">
//       <label className="age">Age</label>
//       <input name="age" type="number" />
//     </div>
//   </div>
//   <div className="signUp__details">
//     {/* <div className="signUp__birth">
//       <label className="date">Date of Birth</label>
//       <input name="dob" type="date" />
//     </div> */}
//     <div className="signUp__country">
//       <label className="country">Country</label>
//       <input name="country" type="text" />
//     </div>
//     <div className="signUp__state">
//       <label className="state">State</label>
//       <input name="state" type="text" />
//     </div>
//   </div>
//   <div className="signUp__passwords">
//     <div className="signUp__password">
//       <label className="password">Password</label>
//       <input name="paswword" type="password" />
//     </div>
//     <div className="signUp__confirmPassword">
//       <label className="confirmPassword">Confirm Password</label>
//       <input name="confirmPassword" type="password" />
//     </div>
//   </div>
// </form>
// </div>
