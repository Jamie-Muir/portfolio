import About from './components/blocks/About.js';
import Banner from './components/blocks/Banner.js';
import Challenges from './components/blocks/Puzzles.js';
import Projects from './components/blocks/Projects.js';
import Snippets from './components/blocks/Snippets.js';
import Footer from './components/blocks/Footer.js';

function App() {
	return (
		<>
			<Banner /> {/* Needs content and social links */}
			<Projects /> {/* overlay images */}
			<About /> {/* Basic Info down */}

			<Challenges /> {/* clone of projects, maybe inverse bricking*/}

			<Snippets /> {/* 90% complete, no idea what the 10% left is - styling? */}

			<Footer /> {/* Needs contact form */}
		</>
	)
}

export default App;
