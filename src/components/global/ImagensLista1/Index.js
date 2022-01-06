import React from "react";
import {VerMaisBtn} from '../VerMaisBtn/Index.js'

import './Index.css'

import quarto3 from "../../../assets/img/quarto3.jpg"

export const ImagensLista1 = () => {
    return (

        <main>
            <ul id="quartosLista">

                <li class="quartoListaItem">

                    <div class="quartoListaImg">
                        <img src={quarto3} alt="quarto"/>
                    </div>

                    <div class="quartoListaInfo">
                        <p>CASAL SIMPLES</p>
                        <VerMaisBtn/>
                    </div>

                </li>

                <li class="quartoListaItem">

                    <div class="quartoListaImg">
                        <img src={quarto3} alt="quarto"/>
                    </div>

                    <div class="quartoListaInfo">
                        <p>CASAL SIMPLES</p>
                        <VerMaisBtn/>
                    </div>
                    
                </li>

                <li class="quartoListaItem">

                    <div class="quartoListaImg">
                        <img src={quarto3} alt="quarto"/>
                    </div>

                    <div class="quartoListaInfo">
                        <p>CASAL SIMPLES</p>
                        <VerMaisBtn/>
                    </div>
                    
                </li>

                <li class="quartoListaItem">

                    <div class="quartoListaImg">
                        <img src={quarto3} alt="quarto"/>
                    </div>

                    <div class="quartoListaInfo">
                        <p>CASAL SIMPLES</p>
                        <VerMaisBtn/>
                    </div>
                    
                </li>

            </ul>
        </main>
    )
}