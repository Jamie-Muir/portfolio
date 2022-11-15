import SnippetsCard from '../SnippetsCard';
import styles from './CSS/Snippets.module.css';

function Snippets() {
	return (
		<div id='snippets' className={styles.snippets}>
			<h2>Code Snippets that do me a helpin</h2>
			<div className={styles['snippets-container']}>
				<SnippetsCard
					title='React Authentication'
					description='A mock project holding authentication context and a useHttp custom hook
					Utilises localStorage and firebase to connect.  
					Utilised in learning authentication for future projects.'
					source='https://github.com/Jamie-Muir/react-auth'
					sourceName='GitHub Source' 
					livePage='https://jamie-muir.github.io/react-auth/'
				/>
				<SnippetsCard
					title='useHTTP Custom Hook'
					description='A simple & reusable custom hook to send GET & POST requests. Used in practicing custom hooks.'
					source='https://github.com/Jamie-Muir/usehttp-hook'
					sourceName='GitHub Source' 
				/>
				<SnippetsCard
					title='Validation: Email & Passwords'
					description='A DEFAULT ADDED THINGY HERE PLS CHANGE'
					source=''
					sourceName='Source' 
					disabled='true'
				/>
				<SnippetsCard
					title='CSS Grid Playground'
					description='A selector to take the first element, skip two, then select two. 
					Used in the building of this site.'
					source='https://jsfiddle.net/bnho9w8a/97/'
					sourceName='JSFiddle Source' 
				/>
				
			</div>
		</div>
	);
}

export default Snippets;