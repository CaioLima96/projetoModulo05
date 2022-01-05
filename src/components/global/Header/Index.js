import React from "react";

import './Index.css'


class Header extends React.Component {
    render(){

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
                        {/* <li><a href="/">Hotel Resilia Palace</a></li> */}
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Quartos</a></li>
                        <li><a href="/">Eventos</a></li>
                        <li><a href="/">Experiências</a></li>
                        <li><a href="/">Galera</a></li>
                        <li><a href="/">Fale Conosco</a></li>
                        <li><button>RESERVE AQUI</button></li>
                    </ul>

                </nav>

            </header>
        )
    }
}

export default Header