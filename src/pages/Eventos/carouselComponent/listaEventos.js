import React from 'react';
import data from "./eventos.json"
import Eventos from './eventos.js';

const { eventos } = data;

console.log(eventos);

export const ListaEventos = () => {
    return (
        <div style={{ paddingBottom: "24px" }}>
            <div style={{ margin: 'auto', marginTop: "0", paddingBottom: "60px" }} id="textoCentro">
            </div>
            {(eventos).map((evento, index) => <Eventos key={index} inverted={(index + 1) % 2 === 0} title={evento.title} img={evento.img}>
                {evento.body}
            </Eventos>)}
        </div>
    );
}