import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './card.module.scss';

const Card = ({ url = '', alt = 'nothing', title = 'project-title' }) => {
	return (
		<div className={styles.card}>
			{/* <StaticImage src={url} alt={alt} /> */}
			<h3>{title}</h3>
		</div>
	);
};

export default Card;
