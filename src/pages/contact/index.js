import * as React from 'react';
import Layout from '../../components/layout/Layout';
import * as styles from './contact.module.scss';

const IndexPage = () => {
	return (
		<Layout>
			<h1>Need our services? Contact us!</h1>
			<div className={styles.contactBox}>
				<p>Lorem Ipsum LLC</p>
				<p>loremipsum@loremips.um</p>
				<p>+381 XX XXXXXX</p>
				<p>Some Street 33, Adelaide</p>
			</div>
		</Layout>
	);
};

export default IndexPage;
