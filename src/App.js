import Header from './components/global/Header/Index.js';
import Footer from './components/global/Footer/Index.js';
// import { HeroImg } from './components/global/HeroImg/Index.js';
import { Quartos } from './components/Quartos/Index.js';

import './App.css';
import './styles/global.css'


function App() {

  	return (
		<div className="App">

			<Header/>

			<div id="content">

				{/* <HeroImg/> */}
				
				<Quartos/>
				
			</div>

			<Footer/>
		</div>
  	);
}

export default App;
