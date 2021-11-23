import { Link } from 'gatsby';
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
			<p style={styles.paragraph}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ullam
				repellat explicabo culpa ut, atque suscipit neque in dolores illum
				aliquid aut voluptatibus nesciunt cum beatae consequuntur blanditiis
				temporibus quisquam! Lorem ipsum dolor sit, amet consectetur adipisicing
				elit. Suscipit asperiores enim excepturi corporis, ad adipisci obcaecati
				possimus ex odio necessitatibus sed quam molestias quia nemo tenetur
				vitae fugiat aut nobis.
			</p>
			<p style={styles.paragraph}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, provident.
				Rem molestiae quam eaque placeat cumque, vitae odio et perferendis autem
				corrupti quae facilis molestias ut obcaecati porro dignissimos
				necessitatibus! Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Blanditiis, dolores minima sit unde nobis harum ducimus veritatis
				officia soluta exercitationem. Porro modi maiores, possimus temporibus
				molestiae unde rerum nemo odit.
			</p>
			<Link to='/projects' className={styles.navlink}>
				<h3>Take a look at some of our work</h3>
			</Link>
		</Layout>
	);
};

export default IndexPage;
