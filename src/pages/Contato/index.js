import React from 'react';
import { HeroImg } from "../../components/HeroImg";
import logo from "../../assets/img/logo/logo1.png";

import './styles.css'

export default () => {
  return (
    <>
      <HeroImg><h1>Contatos</h1></HeroImg>
      <main  id="Contatos">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div id="contatoRight">
          <p>Fale conosco:</p>

          <p>Reserva: 4002-8922</p>

          <p>Duvidas: 2569-6969</p>

          <p>Email: hotelresiliapalace@gmail.com</p>
          <br></br>
          <p>Entre em contato com as pessoas responsáveis pelo site:<a href="https://github.com/CaioLima96/projetoModulo05"> Github</a></p>
        </div>


      </main>
    </>
  )
}