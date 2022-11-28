import React, { useState } from 'react'

import styles from './ProjectCard.module.css';
import Card from './UI/Card.js';
import Modal from './UI/Modal';


function ProjectCard(props) {

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const setBodyScroll = (style) => document.body.style.overflow = style

	const openModal = () => {
		if (props.disabled) return;
		setModalIsOpen(true);
		setBodyScroll('hidden');
	}
	const closeModal = () => {
		setModalIsOpen(false);
		setBodyScroll('scroll')
	}

	const { className, background, ...newProps } = props;

	return (
		<React.Fragment>
			{modalIsOpen &&
				<Modal
					{...newProps}
					onConfirm={closeModal}
					modalIsOpen={modalIsOpen}
				/>
			}
			<div
				className={`${styles.projectCard} ${props.className}`}
				onClick={openModal}
			>
				<Card
					background={props.background}
					height='250px'
					width='100%'
				>
					{props.showTitle && <h2 className={styles.title}>{props.title}</h2>}
				</Card>

			</div>
		</React.Fragment>

	);
}

export default ProjectCard;