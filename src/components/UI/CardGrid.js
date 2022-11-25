import './CardGrid.css';

function CardGrid(props) {
	return (
		<div className='block'>
			<h2 className='title'>{props.title}</h2>
			<div className='subtitle'>
				{props.description}
			</div>
			<div className='container'>
				{props.children}
			</div>
		</div>

	);
}

export default CardGrid;