import * as React from 'react';
import Layout from '../../components/layout/Layout';
import * as styles from './about.module.scss';

const IndexPage = () => {
	return (
		<Layout>
			<h1 style={styles.title}>We are lorem ipsum</h1>
			<p style={styles.paragraph}>
				We are a small team of passionate people. Founded 20XX. Lorem ipsum,
				dolor sit amet consectetur adipisicing elit. Sit explicabo ex odit eaque
				debitis vel quae eos enim, minima, alias voluptatum. Recusandae, et quis
				dolore labore exercitationem quas placeat asperiores?
			</p>
			<h2>Here are some of the projects we've done</h2>
		</Layout>
	);
};

export default IndexPage;
