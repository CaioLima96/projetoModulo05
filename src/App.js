import Header from './components/global/Header/Index.js';
import Footer from './components/global/Footer/Index.js';
import { HeroImg } from './components/global/HeroImg/Index.js';

import './App.css';


function App() {

  	return (
		<div className="App">

			<Header/>

			<div id="content">

				<HeroImg/>
				
				
				
			</div>

			<Footer/>
		</div>
  	);
}

export default App;
