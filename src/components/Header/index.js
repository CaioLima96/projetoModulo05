import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReserveAquiBtn } from "../ReserveAquiBtn";

import { Header as HeaderTag, NavBarLista } from "./styles";
import MenuIcon from '../../assets/img/icons/menu.svg'

const Header = ({ mostraCarrinho }) => {

    function myNavBar() {
        let lista = document.getElementById("navBarLista")
        lista.classList.toggle('hideShowBtn')
        console.log('teste')
    }

    return (

        <HeaderTag>

            <nav id="navMenu">

                <div>
                    <a href="/">Hotel Resilia Palace</a>
                    <div onClick={myNavBar}><img src={MenuIcon} alt="Menu Icon" /></div>
                </div>

                <NavBarLista id="navBarLista">
                    {/* <li>
                        <Link to="/">Hotel Resilia Palace</Link>
                    </li> */}
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/adm">ADM</Link></li>
                    <li><Link to="/quartos">Quartos</Link></li>
                    <li><a href="/eventos">Eventos</a></li>
                    <li><a href="/experiencias">Experiências</a></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li><a href="/">Fale Conosco</a></li>
                    <li onClick={() => mostraCarrinho()}><ReserveAquiBtn>RESERVE AQUI</ReserveAquiBtn></li>
                </NavBarLista>

            </nav>

        </HeaderTag>
    )
}

export default Header