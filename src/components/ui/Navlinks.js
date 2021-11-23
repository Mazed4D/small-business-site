import React from 'react';
import { Link } from 'gatsby';
import * as styles from './navlinks.module.scss';

const Navlinks = () => {
	console.info(styles);
	return (
		<div className={styles.navlinks}>
			<ul className={styles.navlinksList}>
				<li className={styles.navlinksList__item}>
					<Link href='/about' className={styles.navlink}>
						About
					</Link>
				</li>
				<li className={styles.navlinksList__item}>
					<Link href='/contact' className={styles.navlink}>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navlinks;
