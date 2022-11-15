import React, { useRef } from 'react'
import styles from './Contact.module.css';

function Contact() {

	const emailInputRef = useRef(null);
	const nameInputRef = useRef(null);
	const messageInputRef = useRef(null);


	const submitHandler = (event) => {
		event.preventDefault();

		const submittedEmail = emailInputRef.current;
		const submittedName = nameInputRef.current;
		const submittedMessage = messageInputRef.current;

		console.log(submittedEmail);
		console.log(submittedName);
		console.log(submittedMessage);
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor='email'>Email:</label>
				<input type='email' id='email' required ref={emailInputRef} />
			</div>
			<div>
				<label htmlFor='name'>Name:</label>
				<input type='text' id='name' required ref={nameInputRef} />
			</div>
			<div>
				<label htmlFor='message'>Message:</label>
				<input type='text' id='message' required ref={messageInputRef} />
			</div>
			<button type='submit'>Send Message!</button>
		</form>
		);
}

export default Contact;