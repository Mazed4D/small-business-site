import React from 'react';
import Footer from '../ui/Footer';
import Navbar from '../ui/Navbar';
import * as styles from './layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<main className={styles.content}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
