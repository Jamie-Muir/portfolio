import ProjectCard from "../ProjectCard";
import CardGrid from "../UI/CardGrid";

import gramp from '../../assets/images/title-black.webp';
// import reactfood from '../images/react-food.webp';
// import weather from '../images/weather.webp';
import expenses from '../../assets/images/expenses.webp';
import reactbook from '../../assets/images/reactbook.webp';
import code from '../../assets/images/code.webp'
// import Modal from "../UI/Modal";

function Projects() {

	const description = (
		<>
			<h3>Some of my completed projects available for viewing.</h3>
			{/* <p>These have a focus on React & Javascript</p> */}
		</>
	)

	return (
		<CardGrid
			title='Projects'
			description={description}
		// description={`Some of my completed projects available for viewing.`}
		>
			{/* NUMBER 1 */}
			<ProjectCard
				title='Grampian Secure'
				subtitle='Website Redesign'
				className='gridItem'
				background={gramp}
				// live='https://jamie-muir.github.io/grampian-secure/'
				//'https://www.grampiansecure.co.uk'
				github='https://github.com/Jamie-Muir/grampian-secure'
				html css js react
			>
				A website redesign project for a local security company with the purpose of building a faster and smoother user
				experience than their current solution that could also be decoupled from their hosting service.
				<br /><br />
				The initial site had a speed index of up to 10.6s at worst, according to lightbox.

				My redesign dramatically improved the fluidity and speed of the site. I accomplished this by building it as a
				Single-Page Application with React, and utilising more advanced features such as lazy-loading to improve the
				initial load time.
				<br /><br />
				Along with other improvements like converting all images to the Webp format the resulting design had a reported
				speed index of under 1 second.

			</ProjectCard>

			{/* NUMBER 2 */}
			<ProjectCard
				showTitle
				title='Lobsang Discord Bot'
				subtitle='Moderation Application'
				className='gridItem'
				background={code}
				github='https://github.com/Jamie-Muir/LobsangBot'
				js
			>
				Lobsang Bot is an application built in Javascript utilising the Discord API to provide moderation capabilities
				via text-line to Discord servers.
				<br />
				This project was developed as an exploration of text interfaces in javascript and provided a practice ground to
				utilise ES6 features and module exports in creating a highly scalable project.
				<br /><br />
				Exporting commands/functions as an object that contained meta data about the function was one of my favourite
				structural elements of this project and a great learning experience in moving data around in Javascript. How well
				the functions are related to the user and maintainer is something I consider a success of the project and was a
				good precursor to developing my skills in React.

				<br /><br />
				If I were to revisit this project, I would take what I've learned from React in compartmentalising file systems
				and focus on building a better overall file structure for the project as I feel that, along with function bloat
				in certain places, are the core areas to learn from with this project.

			</ProjectCard>

			{/* NUMBER 3 */}
			<ProjectCard
				showTitle
				title='Expense Tracker'
				subtitle='Practice Applet'
				className='gridItem'
				background={expenses}
				live='https://jamie-muir.github.io/react-expenses/'
				github='https://github.com/Jamie-Muir/react-expenses'
				html css js react
			>
				A twist on the typical To-Do C.R.U.D practice app.
				<br /> <br />
				Base UI is from Academind's React - The Complete Guide course, I have extended the functionality to include a
				Firebase backend.
			</ProjectCard>

			{/* NUMBER 4 */}
			<ProjectCard
				title='ReactBook'
				className='gridItem'
				background={reactbook}
				disabled
				html css js react sass
			>
				This is a card I think
			</ProjectCard>

			{/* NUMBER 5 */}
			<ProjectCard
				title=''
				subtitle=''
				className='gridItem'
				// background={''}
				disabled
			>
				This is a card I think
			</ProjectCard>

			{/* NUMBER 6 */}
			<ProjectCard
				// showTitle
				title=''
				subtitle=''
				className='gridItem'
				background={''}
				disabled
			>
				This is a card I think
			</ProjectCard>

		</CardGrid>

	);
}

export default Projects;