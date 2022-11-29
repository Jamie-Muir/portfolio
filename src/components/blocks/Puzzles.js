import ProjectCard from "../ProjectCard";
import CardGrid from "../UI/CardGrid";

import fizzbuzz from '../../assets/images/fizzbuzz.webp';
import xandos from '../../assets/images/xandos.webp';

function Puzzles() {
	return (
		<CardGrid
			title='Coding Challenges & Puzzles'
			description='Examples of completed attempts at common interview challenges'
		>
			<ProjectCard
				showTitle
				title='FizzBuzz'
				subtitle='The Classic'
				className='boxitem'
				background={fizzbuzz}
				live='https://jamie-muir.github.io/fizzbuzz'
				github='https://github.com/Jamie-Muir/fizzbuzz'
			>
				If a number is a multiple of X, print Fizz. If a number is a multiple of Y, print Buzz.
				<br />
				If both are true, print FizzBuzz.
				<br /><br />
				A test to demostrate self-documenting, DRY, and maintainable code.
			</ProjectCard>

			<ProjectCard
				title='Noughts & Crosses'
				subtitle='React Context Applet'
				className='boxitem'
				background={xandos}
				live='https://jamie-muir.github.io/noughts-and-crosses'
				github='https://github.com/Jamie-Muir/noughts-and-crosses'
			>
				This is a little card I think
			</ProjectCard>

			<ProjectCard
				title='BIG card'
				className='boxitem'
				disabled
			>
				<p>This is a card I think</p>
			</ProjectCard>

			<ProjectCard
				title='lil Card'
				className='boxitem'
				disabled
			>
				This is a card I think
			</ProjectCard>

			<ProjectCard
				title='lil Card'
				className='boxitem'
				disabled
			>
				This is a card I think
			</ProjectCard>

			<ProjectCard
				title='BIG Card'
				className='boxitem'
				disabled
			>
				This is a card I think
			</ProjectCard>
		</CardGrid>
	);
}

export default Puzzles;