import ProjectCard from "../ProjectCard";
import CardGrid from "../UI/CardGrid";

import fizzbuzz from '../../assets/images/fizzbuzz.webp';

function Puzzles() {
	return (
		<CardGrid
			title='Coding Challenges & Puzzles'
			description='Examples of completed attempts at common interview challenges'
		>
			<ProjectCard
				showTitle
				title='FizzBuzz'
				className='boxitem'
				background={fizzbuzz}
				live='https://jamie-muir.github.io/fizzbuzz'
				github='https://github.com/Jamie-Muir/fizzbuzz'
			>
				This is a big card I think
			</ProjectCard>

			<ProjectCard
				title='BIG card'
				className='boxitem'
				disabled
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