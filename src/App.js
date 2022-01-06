import Header from './components/Global/Header/Index.js'
import Footer from './components/Global/Footer/Index.js'
// import { HeroImg } from './components/global/HeroImg/Index.js';
import { Quartos } from './components/Quartos/Index.js';

import './App.css';
import './styles/global.css'


function App() {

  	return (
		<div className="App">

			<Header/>

			{/* <div id="content"> */}

				{/* <HeroImg/> */}
				
				<Quartos/>
				
			

			<Footer/>
		</div>
  	);
}

export default App;
