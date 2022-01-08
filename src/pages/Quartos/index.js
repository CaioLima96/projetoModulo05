import React from "react";
import { HeroImg } from "../../components/HeroImg/Index";
import { ImagensLista1 } from "../../components/ImagensLista1/Index";
import Reservar from '../../components/Reservar'

import './styles.css'

export const Quartos = () => {
    return (
        <>
            <HeroImg/>

            <main>
                <ImagensLista1/>
            </main>
            
        </>
    )
}