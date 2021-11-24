import React from 'react';
import Project from '../../../components/layout/Project';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../../components/layout/Layout';

const Crypto = () => {
	const data = useStaticQuery(graphql`
		query cryptoQuery {
			file(relativePath: { eq: "projects/crypto.jpg" }) {
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
				alt='photo of a cryptocurrency trading platform on a phone'
				title='Cryptocurrency trading platform'
			/>
		</Layout>
	);
};

export default Crypto;
