import Header from './components/Global/Header/Index';
import Footer from './components/Global/Footer/Index';
// import { HeroImg } from './components/global/HeroImg/Index.js';
import { Quartos } from './components/Quartos/Index';

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
