import ProjectCard from "../ProjectCard";
import CardGrid from "../UI/CardGrid";

function Puzzles() {
	return (
		<CardGrid 
			title='Puzzles that do me a solvin'
			description='hiya'	
		>
			<ProjectCard
				title='lil Card'
				className='gridItemReverse'
			>
				This is a big card I think
			</ProjectCard>

			<ProjectCard
				title='BIG card'
				className='gridItemReverse'
			>
				This is a little card I think
			</ProjectCard>

			<ProjectCard 
				title='BIG card' 
				className='gridItemReverse'
			>
				<p>This is a card I think</p>
			</ProjectCard>

			<ProjectCard
				title='lil Card'
				className='gridItemReverse'
			>
				This is a card I think
			</ProjectCard>

			<ProjectCard
				title='lil Card'
				className='gridItemReverse'
			>
				This is a card I think
			</ProjectCard>

			<ProjectCard
				title='BIG Card'
				className='gridItemReverse'
			>
				This is a card I think
			</ProjectCard>
		</CardGrid>
	);
}

export default Puzzles;