import React from "react";
import {VerMaisBtn} from '../VerMaisBtn'

import './Index.css'

import exp2 from "../../assets/img/exp2.jpg"

export const ImagensLista2 = () => {
    return (

        
            <ul id="expLista">

                <li class="expListaItem">

                    <div class="expListaImg">
                        <img src={exp2} alt="exp"/>
                    </div>

                    <div class="expListaInfo">
                        <p>chá da tarde</p>
                        <VerMaisBtn/>
                    </div>

                </li>

                <li class="expListaItem">

                    <div class="expListaImg">
                        <img src={exp2} alt="exp"/>
                    </div>

                    <div class="expListaInfo">
                        <p>massagem relaxante</p>
                        <VerMaisBtn/>
                    </div>
                    
                </li>

                <li class="expListaItem">

                    <div class="expListaImg">
                        <img src={exp2} alt="exp"/>
                    </div>

                    <div class="expListaInfo">
                        <p>jantar a luz de velas</p>
                        <VerMaisBtn/>
                    </div>
                    
                </li>

                <li class="expListaItem">

                    <div class="expListaImg">
                        <img src={exp2} alt="exp"/>
                    </div>

                    <div class="expListaInfo">
                        <p>massagem facial</p>
                        <VerMaisBtn/>
                    </div>
                    
                </li>

            </ul>
        
    )
}