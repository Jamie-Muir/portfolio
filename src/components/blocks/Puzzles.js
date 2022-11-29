import ProjectCard from "../ProjectCard";
import CardGrid from "../UI/CardGrid";

import fizzbuzz from '../../assets/images/fizzbuzz.webp';
import xandos from '../../assets/images/xandos.webp';

function Puzzles() {

	const description = (
		<>
			<h3>Some examples of completed attempts at common interview challenges.</h3>
		</>
	)

	return (
		<CardGrid
			title='Coding Challenges & Puzzles'
			description={description}
		>
			<ProjectCard
				showTitle
				title='FizzBuzz'
				subtitle='The Classic'
				className='boxitem'
				background={fizzbuzz}
				live='https://jamie-muir.github.io/fizzbuzz'
				github='https://github.com/Jamie-Muir/fizzbuzz'
				html css js
			>
				If a number is a multiple of <code>X</code>, print <code>Fizz</code>.
				If a number is a multiple of <code>Y</code>, print <code>Buzz</code>.
				<br />
				If both are true, print <code>FizzBuzz</code>.
				<br /><br />
				A test to demostrate self-documenting, DRY, and maintainable code.
				<br />
				For my solution I used a <code>result</code> output string and appended the text if <code>num % fizz === 0</code>.
			</ProjectCard>

			<ProjectCard
				showTitle
				title='Noughts & Crosses'
				subtitle='React Context Applet'
				className='boxitem'
				background={xandos}
				live='https://jamie-muir.github.io/noughts-and-crosses'
				github='https://github.com/Jamie-Muir/noughts-and-crosses'
				js react html css
			>
				Here the board state is represented by a 3x3 array and is provided to the application via <code>React Context</code>.
				<br /><br />
				Winner determining algorithms are separate from each other;<br />
				<ul>
					<li>
						Row winners are determined by using the helper function <code>Array.every()</code> and matching to the active player
					</li>
					<li>
						Column winners are determined by using a <code>for</code> loop on the row array index,
					</li>
					<li>
						Diagonal winners are determined by brute checks of all winning squares,
					</li>
					<li>
						and lastly Draws are determined by filtering out each row that includes a default index then returning <code>state.length === 0</code>
					</li>
				</ul>
				Of these solutions I am most unhappy with the diagonal method, however, it is an appropriate amount of effort for the size of the application,
				and the time-complexity of the operations are not bottlenecks to the applications performance, so while more research into a more elegant
				solution is empirically better I reason it would not be worthwhile for the purposes of the project.

			</ProjectCard>

			<ProjectCard
				title='BIG card'
				className='boxitem'
				disabled
			>
				<br />
			</ProjectCard>

			<ProjectCard
				title='lil Card'
				className='boxitem'
				disabled
			>
				<br />
			</ProjectCard>

			<ProjectCard
				title='lil Card'
				className='boxitem'
				disabled
			>
				<br />
			</ProjectCard>

			<ProjectCard
				title='BIG Card'
				className='boxitem'
				disabled
			>
				<br />
			</ProjectCard>
		</CardGrid>
	);
}

export default Puzzles;