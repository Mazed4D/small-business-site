import * as React from 'react';
import Layout from '../components/layout/Layout';
import * as styles from './home.module.scss';

const IndexPage = () => {
	return (
		<Layout>
			<h1 className={styles.title}>We do lorem ipsum</h1>
			<h2 className={styles.subtitle}>...and more.</h2>
		</Layout>
	);
};

export default IndexPage;
