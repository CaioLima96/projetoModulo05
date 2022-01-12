import React from 'react'
import { Quartos } from './pages/Quartos';
import Galeria from './pages/Galeria/Index.js';
import Home from './pages/Home'
import { Experiencias } from './pages/Experiencias/Index.js';
import { Staff } from './pages/Staff/index.js';
import  FaleConosco from './pages/Contato/index.js';
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";


import './App.css';
import './styles/global.css'
import Layout from './components/Layout/index.js';
import { Eventos } from './pages/Eventos/Index';


function App() {

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/home" element={<Home/>}/>
					<Route path="/galeria" element={<Galeria/>}/>
					<Route path="/quartos" element={<Quartos/>}/>
					<Route path="/experiencias" element={<Experiencias/>}/>
					<Route path="/eventos" element={<Eventos/>}/>
					<Route path="" element={<Home/>}/>
					<Route path="/staff" element={<Staff/>}/>
					<Route path="/fale_conosco" element={<FaleConosco/>}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
