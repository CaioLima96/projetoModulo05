import React from 'react';
import data from "./eventos.json"
import Eventos from './eventos.js';

const { eventos } = data;

console.log(eventos);

export const ListaEventos = () => {
    return (
        <div style={{ paddingBottom: "24px" }}>
            <div style={{ margin: 'auto', marginTop: "0", paddingBottom: "60px" }} id="textoCentro">
                <h1>Nossos Eventos</h1>
                <hr></hr>
                <p>Fundados no ano de 1996 somos um hotel que busca atender e oferecer aos nosso clientes serviços diferenciados no ramo de hospedagem e turismo com a intenção de promover momentos especiais e inesquecíveis.</p>
                <p id="espaçoBotao">Nossa missão ...</p>
                <hr></hr>
            </div>
            {(eventos).map((evento, index) => <Eventos key={index} inverted={(index + 1) % 2 === 0} title={evento.title} img={evento.img}>
                {evento.body}
            </Eventos>)}
        </div>
    );
}