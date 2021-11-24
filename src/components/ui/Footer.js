import React from 'react';
import { Link } from 'gatsby';
import * as styles from './footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.footer}>
			{/* <Link href='/contact' className={styles.navlink}>
				Contact us
			</Link> */}
			<p>
				Made by{' '}
				<a href='https://github.com/mazed4D/' className={styles.git}>
					Milan Paunović
				</a>
			</p>
		</div>
	);
};

export default Footer;
