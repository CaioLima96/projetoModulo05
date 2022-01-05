import React from "react";
// import { Main } from "../../global/Main/Index";

import './Index.css'

import quarto3 from "../../../assets/img/quarto3.jpg"

export const QuartosLista = () => {
    return (

        <main>
            <ul id="quartosLista">

                <li class="quartoListaItem">
                    <div class="quartoListaImg">
                        <img src={quarto3} alt="quarto"/>
                    </div>
                    <div class="quartoListaInfo">
                        <p>CASAL SIMPLES</p>
                        <button>ver mais</button>
                    </div>
                </li>

            </ul>
        </main>
    )
}