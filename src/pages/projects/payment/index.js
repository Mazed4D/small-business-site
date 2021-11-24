import React from 'react';
import Project from '../../../components/layout/Project';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../../../components/layout/Layout';

const Payment = () => {
	const data = useStaticQuery(graphql`
		query paymentQuery {
			file(relativePath: { eq: "projects/payment.jpg" }) {
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
				alt='photo of a credit card'
				title='Online payment system'
			/>
		</Layout>
	);
};

export default Payment;
