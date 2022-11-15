import styles from './CSS/Banner.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Banner() {
	return (
		<section id={styles.banner} className={styles.bannerImage}>
			<div className={styles.inner}>
				<header>
					<h1>Jamie Muir</h1>
					<h2>Web Developer</h2>
				</header>
				<div className={styles.content} >
					<div className={styles.bannerLogos}>
						<a href='https://github.com/jamie-muir' aria-label='Github' target='_blank' rel='noreferrer'>
							<FaGithub size={40} />
						</a>
						<a href='https://github.com/jamie-muir' aria-label='LinkedIn' target='_blank' rel='noreferrer'>
							<FaLinkedin size={40} />
						</a>
					</div>
				</div>
			</div>

		</section>
	);
}

export default Banner;