function ExternalButton(props) {
	return (
		<a href={props.src}
			target='_blank' 
			rel='noreferrer' 
		>
			<button 
				name={props.name}
				className={props.className}
				
			>	
				{props.children}
			</button>
		</a>
	);
}

export default ExternalButton;