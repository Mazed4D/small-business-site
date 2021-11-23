import React from 'react';
import { Link } from 'gatsby';
import * as styles from './footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<Link href='/contact' className={styles.navlink}>
				Contact us
			</Link>
		</div>
	);
};

export default Footer;
