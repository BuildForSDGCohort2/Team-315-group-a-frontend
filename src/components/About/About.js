import React from 'react';
import Header from '../Header/header.component';
import Footer from '../Footer/Footer';
import './About.css';

import { FaFacebook, FaTwitter, FaGooglePlus, FaPhone, FaInstagram, FaGooglePlusG } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const About = () => {
	return (
		<section>
			<Header />

			<div className="ABT">
				<section className="aboutContainer">
					<h2>about</h2>

					<header>
						<h1>converge</h1>

						<div>
							<h3>what we do</h3>

							<p>
								We bridge the gap between hackathon developers and designers and potential recruiters.
								We market teams and projects to potential employers and investors
							</p>
						</div>

						<div>
							<h3>why we do it</h3>

							<p>
								Hackathons have become a day to day thing in the developer's ecosystem. These
								competitions are greay for hands on learning. However, the funding benefits are limited
								to winners. As acknowledged that not everyone can be a winner, so what happens to the
								loosing teams? Most often the project is ditched, or worst still someone "borrows" the
								idea and launches it as a project which means the efforts and time of the developers go
								down the drain. We seek to change this by creating a platform to showcase all these
								projects and developers involved.
							</p>
						</div>
					</header>

					<div className="font">
						<FaFacebook id="aboutFont" />
						<FaTwitter id="aboutFont" />
						<FaInstagram id="aboutFont" />
						<FaGooglePlusG id="aboutFont" />
						<FaPhone id="aboutFont" />
						<IoIosMail id="aboutFont" />
					</div>
				</section>

				<section className="teamContainer">
					<h3>meet the team</h3>

					<div className="team">
						<div>
							<img src={require('./abt.jpg')} alt="team_img" />
							<h3>Team lead UI/UX</h3>
							<h2>Ebuka Nwaju</h2>
							<h4>contact</h4>
						</div>

						<div>
							<img src={require('./abt.jpg')} alt="team_img" />
							<h3>Team lead UI/UX</h3>
							<h2>Ebuka Nwaju</h2>
							<h4>contact</h4>
						</div>

						<div>
							<img src={require('./abt.jpg')} alt="team_img" />
							<h3>Team lead UI/UX</h3>
							<h2>Ebuka Nwaju</h2>
							<h4>contact</h4>
						</div>

						<div>
							<img src={require('./abt.jpg')} alt="team_img" />
							<h3>Team lead UI/UX</h3>
							<h2>Ebuka Nwaju</h2>
							<h4>contact</h4>
						</div>

						<div>
							<img src={require('./abt.jpg')} alt="team_img" />
							<h3>Team lead UI/UX</h3>
							<h2>Ebuka Nwaju</h2>
							<h4>contact</h4>
						</div>

						<div>
							<img src={require('./abt.jpg')} alt="team_img" />
							<h3>Team lead UI/UX</h3>
							<h2>Ebuka Nwaju</h2>
							<h4>contact</h4>
						</div>

						<div>
							<img src={require('./abt.jpg')} alt="team_img" />
							<h3>Team lead UI/UX</h3>
							<h2>Ebuka Nwaju</h2>
							<h4>contact</h4>
						</div>

						<div>
							<img src={require('./abt.jpg')} alt="team_img" />
							<h3>Team lead UI/UX</h3>
							<h2>Ebuka Nwaju</h2>
							<h4>contact</h4>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</section>
	);
};

export default About;
