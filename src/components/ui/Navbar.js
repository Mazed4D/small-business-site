import React from 'react';
import * as styles from './navbar.module.scss';
import Navlinks from './Navlinks';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<Link href='/' className='navbar-logo'>
				<StaticImage
					src='../../images/logo.png'
					alt='Logo of business'
					placeholder='blurred'
					width={50}
					height={50}
					className='navbar-logo__image'
				/>
			</Link>
			<Navlinks />
		</div>
	);
};

export default Navbar;
