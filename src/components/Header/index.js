import React, {useState} from "react";
import { Link } from "react-router-dom";
import { RerserveAquiBtn } from "../ReserveAquiBtn";

import { Header as HeaderTag, NavBarLista } from "./styles";

const Header = ({mostraCarrinho}) => {
    
    function myNavBar() {
        let lista = document.getElementById("navBarLista")
        lista.classList.toggle('hideShowBtn')
        console.log('teste')
    }

    // function showReservaTab(){
    //     let reservaTab = document.getElementsByClassName('hideReserva')
    //     reservaTab.classList.toggle('showHideReserva')
    //     console.log("reservatab")
    // }

    return (

        <HeaderTag>

            <nav id="navMenu">

                <div>
                    <a href="/">Hotel Resilia Palace</a>
                    <div onClick={myNavBar}>X</div>
                </div>

                <NavBarLista id="navBarLista">
                    {/* <li>
                        <Link to="/">Hotel Resilia Palace</Link>
                    </li> */}
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/quartos">Quartos</Link></li>
                    <li><a href="/">Eventos</a></li>
                    <li><a href="/experiencias">Experiências</a></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li><a href="/">Fale Conosco</a></li>
                    <li onClick={() => mostraCarrinho()}><RerserveAquiBtn/></li>
                </NavBarLista>

            </nav>

        </HeaderTag>
    )
}

export default Header