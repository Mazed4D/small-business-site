import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import * as styles from './accounting.module.scss';
import Layout from '../../../components/layout/Layout';

const Accounting = () => {
	const data = useStaticQuery(graphql`
		query accountingQuery {
			file(relativePath: { eq: "projects/accounting.jpg" }) {
				childImageSharp {
					gatsbyImageData(quality: 100, width: 800)
				}
			}
		}
	`);

	console.info(data);

	return (
		<Layout>
			<GatsbyImage
				image={data.file.childImageSharp.gatsbyImageData}
				alt='photo of a man working on spreadsheets'
				class={styles.image}
			/>
			<h1 className={styles.title}>Accounting software</h1>
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
		</Layout>
	);
};

export default Accounting;
