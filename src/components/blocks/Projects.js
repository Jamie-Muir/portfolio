import ProjectCard from "../ProjectCard";
import CardGrid from "../UI/CardGrid";

import gramp from '../images/title-black.webp';
import reactfood from '../images/react-food.webp';
import weather from '../images/weather.webp';
import expenses from '../images/expenses.webp';
import reactbook from '../images/reactbook.webp';
import code from '../images/code.webp'
// import Modal from "../UI/Modal";

function Projects() {
	return (
		<CardGrid
			title='Projects'
			description={`Some of my completed projects available for viewing. 
			Click to find out more.`}
		>
			{/* NUMBER 1 */}
			<ProjectCard
				title='Grampian Secure Website Redesign'
				className='gridItem'
				background={gramp}
				live='https://www.grampiansecure.co.uk'
				github=''
			>
				A website redesign to
			</ProjectCard>







			{/* NUMBER 2 */}
			<ProjectCard
				showTitle
				title='Lobsang Discord Bot'
				className='gridItem'
				background={code}
				github='https://github.com/Jamie-Muir/LobsangBot'
			>
				Sed in urna a orci tempus iaculis sed eu nisi. Curabitur velit dolor, luctus ac nunc id, commodo mollis ligula. Vivamus nisl dui, pharetra et finibus eget, interdum eu risus. Quisque fringilla, libero ut malesuada ultrices, elit sapien bibendum sem, id sodales sem leo ac elit. Maecenas mattis facilisis pulvinar. Sed congue, velit eleifend sollicitudin dapibus, neque ante finibus tortor, vel dapibus arcu nunc sed velit. Quisque pretium eu sapien a ultricies. Aenean efficitur at nulla ac consequat. Quisque viverra risus a magna pharetra malesuada. Phasellus sed lacus hendrerit, mollis est a, blandit quam. Etiam in ante quam. Suspendisse viverra congue tortor, vitae commodo dui volutpat et.
			</ProjectCard>

			{/* NUMBER 3 */}
			<ProjectCard
				showTitle
				title='Expense Tracker'
				className='gridItem'
				background={expenses}
			>
				This is a card I think
			</ProjectCard>

			{/* NUMBER 4 */}
			<ProjectCard
				title='BIG Card'
				className='gridItem'
				background={reactbook}
				alt='project 1'
			>
				This is a card I think
			</ProjectCard>

			{/* NUMBER 5 */}
			<ProjectCard
				title='lil card'
				className='gridItem'
				background={reactfood}
			>
				This is a card I think
			</ProjectCard>

			{/* NUMBER 6 */}
			<ProjectCard
				showTitle
				title='Weather Fetch App'
				className='gridItem'
				background={weather}
			>
				This is a card I think
			</ProjectCard>

		</CardGrid>

	);
}

export default Projects;