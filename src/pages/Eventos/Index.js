import React from "react";
import { HeroImg } from "../../components/HeroImg/index";
import { CarouselEventos } from "./carouselComponent/carouselEventos";
import './Index.css'

export const Eventos = () => {
    return (
        <>
            <HeroImg><h1>Eventos</h1></HeroImg>
            <main>
                <CarouselEventos />
            </main>
        </>
    )
}