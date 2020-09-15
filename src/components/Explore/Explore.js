import React from 'react';
import Header from '../Header/header.component';
import Footer from '../Footer/Footer';
import './Explore.css';

import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { SiAndela } from 'react-icons/si';

const About = () => {
	return (
		<section>
			<Header />
			<div className="aboutContainer">
				<hgroup>
					<h1>explore</h1>

					<h2>programs</h2>
					<h2>projects</h2>
				</hgroup>

				<section className="eploreBody">
					<div>
						<FaFacebookF className="font" />
						<h3>facebook sdg program</h3>
						<p>
							make a floating div class that hovers on the border of another div make a floating div of
							another lass
						</p>

						<a href="#">see more</a>
					</div>

					<div>
						<SiAndela className="font" />
						<h3>facebook sdg program</h3>
						<p>
							make a floating div class that hovers on the border of another div make a floating div of
							another lass
						</p>

						<a href="#">see more</a>
					</div>

					<div>
						<AiOutlineGoogle className="font" />
						<h3>facebook sdg program</h3>
						<p>
							make a floating div class that hovers on the border of another div make a floating div of
							another lass
						</p>

						<a href="#">see more</a>
					</div>

					<div>
						<FaFacebookF className="font" />
						<h3>facebook sdg program</h3>
						<p>
							make a floating div class that hovers on the border of another div make a floating div of
							another lass
						</p>

						<a href="#">see more</a>
					</div>

					<div>
						<SiAndela className="font" />
						<h3>facebook sdg program</h3>
						<p>
							make a floating div class that hovers on the border of another div make a floating div of
							another lass
						</p>

						<a href="#">see more</a>
					</div>

					<div>
						<AiOutlineGoogle className="font" />
						<h3>facebook sdg program</h3>
						<p>
							make a floating div class that hovers on the border of another div make a floating div of
							another lass
						</p>

						<a href="#">see more</a>
					</div>

					<div>
						<FaFacebookF className="font" />
						<h3>facebook sdg program</h3>
						<p>
							make a floating div class that hovers on the border of another div make a floating div of
							another lass
						</p>

						<a href="#">see more</a>
					</div>

					<div>
						<SiAndela className="font" />
						<h3>facebook sdg program</h3>
						<p>
							make a floating div class that hovers on the border of another div make a floating div of
							another lass
						</p>

						<a href="#">see more</a>
					</div>

					<div>
						<AiOutlineGoogle className="font" />
						<h3>facebook sdg program</h3>
						<p>
							make a floating div class that hovers on the border of another div make a floating div of
							another lass
						</p>

						<a href="#">see more</a>
					</div>
				</section>
			</div>
			<Footer />
		</section>
	);
};

export default About;
