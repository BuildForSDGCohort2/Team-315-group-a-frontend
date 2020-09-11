import React from 'react';
import './header.styles.css';
import { IoIosSearch } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Header = () => {
	return (
		<nav className="headerNav">
			<h1>
				<NavLink to="/" id="navLink">
					Converge
				</NavLink>
			</h1>

			<FaBars id="mbBar" />

			<div className="headerList">
				<ul>
					<li>login</li>
					<li>sign up</li>
					<li>
						<NavLink to="/explore" id="navLink">
							explore
						</NavLink>
					</li>
					<li>faqs</li>
				</ul>

				<div className="headerSearch">
					<IoIosSearch id="headerFont" />
					<input type="text" placeholder="search projects/devs" />
				</div>
			</div>
		</nav>
	);
};

export default Header;
