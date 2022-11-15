import styles from './Card.module.css';

function Card(props) {
	
	const bgStyle = {
		backgroundImage: `url(${props.background})`,
		height: props.height,
		width: props.width,
	}

	return ( 
		<div className={`${styles.card} ${props.className}`} style={bgStyle} >
			{props.children}
		</div>

	);
}

export default Card;