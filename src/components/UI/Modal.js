import React from 'react';
import ReactDOM from 'react-dom'

import Card from './Card';
import ExternalButton from './ExternalButton';

import styles from './Modal.module.css';

import HtmlSvg from '../../assets/svg/HtmlIcon.svg';
import CSSsvg from '../../assets/svg/CSS3Icon.svg';
import JsSvg from '../../assets/svg/JavascriptIcon.svg';
import ReactSvg from '../../assets/svg/ReactIcon.svg';
import ReduxSvg from '../../assets/svg/ReduxIcon.svg';
import SassSvg from '../../assets/svg/SassIcon.svg';



const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm} />
}

// ADD TOOL TIP
const IconImg = (props) => (
	<>

		<img src={props.src} alt={props.alt} className={styles.icon} width='50' height='50' />
	</>
)

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal} >
			<header className={styles.header} >
				<button onClick={props.onConfirm} className={styles.closebtn}> &times; </button>
				<h2>{props.title}</h2>
				<h3>{props.subtitle}</h3>
			</header>

			<div className={styles.content}>
				{props.children}
			</div>

			<div className={styles.techIcons}>
				{props.html && <IconImg src={HtmlSvg} alt='html icon' />}
				{props.css && <IconImg src={CSSsvg} alt='css icon' />}
				{props.js && <IconImg src={JsSvg} alt='javascript icon' />}
				{props.react && <IconImg src={ReactSvg} alt='react icon' />}
				{props.redux && <IconImg src={ReduxSvg} alt='redux icon' />}
				{props.sass && <IconImg src={SassSvg} alt='sass icon' />}
			</div>

			<footer >
				<div className={styles.actions}>

					{props.github &&
						<ExternalButton name='github' src={props.github}>
							GitHub Source
						</ExternalButton>}
					{props.live &&
						<ExternalButton name='live' src={props.live}>
							Live Site
						</ExternalButton>}
				</div>
			</footer>
		</Card>
	)
}

function Modal(props) {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root')
			)}

			{ReactDOM.createPortal(
				<ModalOverlay {...props} />,
				document.getElementById('overlay-root')
			)}

		</React.Fragment>

	);
}

export default Modal;