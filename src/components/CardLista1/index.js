import React from "react";

import { CardsLista } from "./styles.js";


export const CardLista1 = ({children}) => {
    return (

        <CardsLista id="quartosLista">

            {children}

            {/* EXEMPLO DO ITEM DA LISTA */}
            {/* <li className="cardsListaItem">

                <div className="cardsListaImg">
                    <img src={quarto3} alt="quarto"/>
                </div>

                <div className="cardsListaInfo">
                    <p>CASAL SIMPLES</p>
                    <VerMaisBtn/>
                </div>

            </li> */}

        </CardsLista>
        
    )
}