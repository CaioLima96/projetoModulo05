import React from "react";
import { Link } from "react-router-dom";
import { RerserveAquiBtn } from "../ReserveAquiBtn";

import './Index.css'

const Header = () => {
    
    function myNavBar() {
        let lista = document.getElementById("navBarLista")
        lista.classList.toggle('hideShowBtn')
        console.log('teste')
    }

    return (

        <header>

            <nav id="navMenu">

                <div>
                    <a href="/">Hotel Resilia Palace</a>
                    <div onClick={myNavBar}>X</div>
                </div>

                <ul id="navBarLista">
                    {/* <li>
                        <Link to="/">Hotel Resilia Palace</Link>
                    </li> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quartos">Quartos</Link></li>
                    <li><a href="/">Eventos</a></li>
                    <li><a href="/experiencias">Experiências</a></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li><a href="/">Fale Conosco</a></li>
                    <li><RerserveAquiBtn/></li>
                </ul>

            </nav>

        </header>
    )
}



// class Header extends React.Component {
//     render(){

//         function myNavBar() {
//             let lista = document.getElementById("navBarLista")
//             lista.classList.toggle('hideShowBtn')
//             console.log('teste')
//         }

//         return (

//             <header>

//                 <nav id="navMenu">

//                     <div>
//                         <a href="/">Hotel Resilia Palace</a>
//                         <div onClick={myNavBar}>X</div>
//                     </div>
//                         <ul id="navBarLista">
//                             {/* <li>
//                                 <Link to="/">Hotel Resilia Palace</Link>
//                             </li> */}
//                             <li><Link to="/">Home</Link></li>
//                             <li><Link to="/quartos">Quartos</Link></li>
//                             <li><a href="/">Eventos</a></li>
//                             <li><a href="/">Experiências</a></li>
//                             <li><Link to="/galeria">Galeria</Link></li>
//                             <li><a href="/">Fale Conosco</a></li>
//                             <li><RerserveAquiBtn/></li>
//                         </ul>

//                 </nav>

//             </header>
//         )
//     }
// }

export default Header