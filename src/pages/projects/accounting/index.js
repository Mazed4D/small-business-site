import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../../components/layout/Layout';
import Project from '../../../components/layout/Project';

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

	return (
		<Layout>
			<Project
				image={data.file.childImageSharp.gatsbyImageData}
				alt='photo of a man working on spreadsheets'
				title='Accounting software'
			/>
		</Layout>
	);
};

export default Accounting;
