import { navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './card.module.scss';

const Card = ({ image, alt, title, name }) => {
	const clickHandler = () => {
		navigate(`/projects/${name}`);
	};

	return (
		<div className={styles.card} onClick={clickHandler}>
			<GatsbyImage image={image} alt={alt} class={styles.image} />
			<h3 className={styles.title}>{title}</h3>
		</div>
	);
};

export default Card;
