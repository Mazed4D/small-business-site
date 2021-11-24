import { graphql, useStaticQuery } from 'gatsby';
import Project from '../../../components/layout/Project';
import React from 'react';
import Layout from '../../../components/layout/Layout';
const Shopping = () => {
	const data = useStaticQuery(graphql`
		query shoppingQuery {
			file(relativePath: { eq: "projects/shopping.jpg" }) {
				childImageSharp {
					gatsbyImageData(quality: 100, width: 800)
				}
			}
		}
	`);

	return (
		<Layout>
			<Project
				image={data.file.childImageSharp.gatsbyImageData}
				alt='photo of shopping carts'
				title='Supermarket menagement software'
			/>
		</Layout>
	);
};

export default Shopping;
