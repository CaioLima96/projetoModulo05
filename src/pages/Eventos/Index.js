import React from "react";
import { HeroImg } from "../../components/HeroImg/index";
import { ListaEventos } from "./carouselComponent/listaEventos";
import './Index.css'

export const Eventos = () => {
    return (
        <>
            <HeroImg><h1>Eventos</h1></HeroImg>
            <main>
                <ListaEventos />
            </main>
        </>
    )
}