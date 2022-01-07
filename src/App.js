import { Quartos } from './pages/Quartos/Index.js';
import Galeria from './pages/Galeria/Index.js';
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";

import './App.css';
import './styles/global.css'
import Layout from './components/Layout/index.js';

function App() {

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					{/* <Route path="/galeria">
						<Galeria />
					</Route>
					<Route path="/quartos">
						<Quartos />
					</Route> */}

					<Route path="/galeria" element={<Galeria/>}/>
					<Route path="/quartos" element={<Quartos/>}/>
					<Route path="" element={<Quartos/>}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
