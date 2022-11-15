import React from 'react';
import ReactDOM from 'react-dom'

import Card from './Card';
import ExternalButton from './ExternalButton';

import styles from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal} >
			<header className={styles.header} >
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				{props.content && props.content}
			</div>
			<footer className={styles.actions}>
				<button onClick={props.onConfirm}>Close</button>
				{props.github && <ExternalButton name='github' src={props.github}>GitHub Source</ExternalButton>}
				{props.live && <ExternalButton name='live' src={props.live}>Live site</ExternalButton>}
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