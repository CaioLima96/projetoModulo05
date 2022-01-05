import React from "react";

import './Index.css'

class Footer extends React.Component {
    render(){
        return (

            <footer>

                <div class="footerContent">

                    <button>RESERVE AQUI</button>

                    <div class="divBar"></div>

                    <ul>

                        <li>Nossa Localização</li>
                        <li>Bairro do Limoeiro</li>
                        <li>São Paulo - Brasil</li>
                        <li>CEP: 20010-010</li>

                    </ul>

                    <div class="divBar"></div>

                    <ul>

                        <li>Fale conosco</li>
                        <li>Reserva: 4002-8922</li>
                        <li>Duvidas: 2569-6969</li>
                        <li>Equipe</li>

                    </ul>
                    
                </div>

            </footer>
        )
    }
}

export default Footer