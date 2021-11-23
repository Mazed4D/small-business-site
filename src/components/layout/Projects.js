import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Card from '../ui/Card';
import * as styles from './projects.module.scss';

const Projects = () => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			allFile(filter: { relativeDirectory: { eq: "projects" } }) {
				nodes {
					childImageSharp {
						gatsbyImageData(
							width: 400
							placeholder: BLURRED
							transformOptions: { fit: FILL }
							height: 250
						)
					}
					name
				}
			}
		}
	`);

	const PROJECTS = [
		{
			image: data.allFile.nodes[1].childImageSharp.gatsbyImageData,
			name: data.allFile.nodes[1].name,
			alt: 'photo of a cryptocurrency trading platform on a phone',
			title: 'Cryptocurrency trading platform',
		},
		{
			image: data.allFile.nodes[0].childImageSharp.gatsbyImageData,
			name: data.allFile.nodes[0].name,
			alt: 'photo of a credit card',
			title: 'Online payment system',
		},
		{
			image: data.allFile.nodes[2].childImageSharp.gatsbyImageData,
			name: data.allFile.nodes[2].name,
			alt: 'photo of a man working on spreadsheets',
			title: 'Accounting software',
		},
		{
			image: data.allFile.nodes[3].childImageSharp.gatsbyImageData,
			name: data.allFile.nodes[3].name,
			alt: 'photo of shopping carts',
			title: 'Supermarket menagement software',
		},
	];

	return (
		<div className={styles.projects}>
			{PROJECTS.map((item) => {
				return (
					<Card
						image={item.image}
						name={item.name}
						alt={item.alt}
						title={item.title}
					/>
				);
			})}
		</div>
	);
};

export default Projects;
