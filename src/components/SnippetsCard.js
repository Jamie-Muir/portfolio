import styles from './SnippetsCard.module.css';
import ExternalButton from './UI/ExternalButton';

function SnippetsCard(props) {

	return (
		<div className={styles['snippets-card']}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>

			<ExternalButton
				name='source'
				src={props.source}
			>
				{props.sourceName}
			</ExternalButton>

			{props.livePage &&
				<ExternalButton
					name='live'
					src={props.livePage}
				>
					Live Page
				</ExternalButton>
			}

		</div>
	);
}

export default SnippetsCard;