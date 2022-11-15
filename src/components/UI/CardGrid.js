import './CardGrid.css';

function CardGrid(props) {
	return (
		<div className='block'>
			<h2>{props.title}</h2>
			<p> {props.description} </p>
			<div className='container'>
				{props.children}
			</div>
		</div>

	);
}

export default CardGrid;