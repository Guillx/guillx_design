import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg';
import { IoClose } from 'react-icons/io5';
import Logo from '../../assets/logo-gx.svg';

import './Navbar.scss';

export default function Navbar() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	useEffect(() => {
		if (showMobileMenu) {
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.documentElement.style.overflow = 'auto';
		}

		return () => {
			document.documentElement.style.overflow = 'auto';
		};
	}, [showMobileMenu]);

	const toggleMobileMenu = () => {
		setShowMobileMenu(!showMobileMenu);
	};

	const closeMobileMenu = () => {
		setShowMobileMenu(false);
	};

	return (
		<nav className={`navbar ${showMobileMenu ? 'menu-open' : ''}`}>
			<Link to='/' onClick={closeMobileMenu}>
				<img
					src={Logo}
					className='navbar__logo'
					alt='Guillx Design Logo'
				/>
			</Link>

			<div className='navbar__menu-toggle' onClick={toggleMobileMenu}>
				{showMobileMenu ? (
					<IoClose className='navbar__menu-toggle__close-icon' />
				) : (
					<CgMenuRight className='navbar__menu-toggle__open-icon' />
				)}
			</div>

			<ul
				className={`navbar__list ${
					showMobileMenu ? 'navbar__list--mobile' : ''
				}`}
			>
				<li className='navbar__list__item'>
					<NavLink to='/about' onClick={closeMobileMenu}>
						About
					</NavLink>
				</li>
				<li className='navbar__list__item'>
					<NavLink to='/projects' onClick={closeMobileMenu}>
						Projects
					</NavLink>
				</li>
				<li className='navbar__list__item'>
					<NavLink to='/contact' onClick={closeMobileMenu}>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
