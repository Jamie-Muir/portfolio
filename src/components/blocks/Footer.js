import Contact from "../Contact";
import Details from "../Details";

import styles from './CSS/Footer.module.css';

function Footer() {
	return ( 
		<div className={styles.footer}>
			<div className={styles.wrapper}>
				<Contact />
				<Details />
			</div>
		</div>		
	 );
}

export default Footer;