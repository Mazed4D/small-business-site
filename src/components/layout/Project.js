import React from 'react';
import * as styles from './project.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';

const Project = ({ image, alt, title }) => {
	return (
		<>
			<GatsbyImage image={image} alt={alt} class={styles.image} />
			<h1 className={styles.title}>{title}</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi rem
				nihil pariatur est consequatur voluptatum enim ratione ducimus sequi sed
				at dolorum, repellendus quas a earum accusamus amet eveniet magni. Lorem
				ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis
				pariatur provident consequatur doloribus velit blanditiis aspernatur
				aperiam vel consequuntur, adipisci ea voluptatem in repellendus quaerat,
				cupiditate mollitia perspiciatis veniam. Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Labore dicta quis officiis. Repudiandae
				hic beatae accusamus cum amet optio, eum perferendis molestiae
				asperiores? Magnam sequi quibusdam quis repudiandae distinctio dolore.
			</p>
		</>
	);
};

export default Project;
