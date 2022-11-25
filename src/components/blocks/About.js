import './CSS/About.css';

import AboutDraw from '../../assets/svg/undraw_assets.svg';
//  style={{backgroundImage: `url(${AboutDraw})`}}

function About() {
	return (
		<section id='about'>
			<h1>About Me</h1>
			<ul className='aboutList'>
				<li>Computer Science Graduate</li>
				<li>React Enthusiast</li>
				<li>Front End Developer</li>
				<li></li>
			</ul>
			<div className='about-content'>
				<img src={AboutDraw} alt='about' />
				<p>
					I'm Jamie, a graduate looking to apply my skills in the wide world of web development.
					<br/><br/>
					I began writing code with Java back in 2009 when I first learned how to build Minecraft mods to add little extras to my game. None of what I wrote exactly took off, nor was it particularly good, but I did manage to make my character shoot fireballs, so that was cool.
					<br /><br />
					After finishing school, I then went to college to get my Higher National Diploma. While there I experimented in lots of languages; A friend and I explored making a small dungeon crawler puzzle game with Python / Pygame, I had a class using Game Maker where I applied what I had learned in Java to make my submission stand out from the rest, and I tackled <i>Accelerated C++ by Andrew Koenig & Barbara E. Moo</i> and challenged myself with... well, C++... and although I didn't continue with C++ what I learned expanded my vocabularly at the least, and gave me a solid foundation for taking on the more advanced topics that I would go on to find at University.
					<br /><br />
					I also dabbled with a bit of PHP as well, and its ability to template HTML showed me there was a world of Front End development that didn't involve copy/pasting the same old HTML for every. single. page.
					<br />
					This sparked my interest. Soon after starting uni I found React.
				</p>

			</div>


		</ section>
	);
}

export default About;

// Computer Science graduate investing in beginning a career working with React, Next.js, & Python.
// < br />
// <br />
// I'm a self-starter with a record of managing my own workflow and effectively managing my time and department toward success. In the past, I've been responsible for managing all the stage equipment of the largest nightclub in Aberdeen, and I've assisted in managing the General Merchandise department at Asda bridge of Dee with an excellent stock take credit result under my belt.
// < br />
// <br />
// I'm currently furthering my expertise with React and adding to my portfolio freelance jobs along with practice projects.
// < br />
// <br />
// In the future, I hope to secure a Software Development role as a front - end or full - stack developer where I can build further skills in modern languages & libraries with experienced developers and share what I've learned from my studies in React.