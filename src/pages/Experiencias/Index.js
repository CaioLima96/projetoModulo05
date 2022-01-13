import React, { useState, useEffect } from "react";
import axios from "axios";

import { CardLista1 } from "../../components/CardLista1";
import { HeroImg } from "../../components/HeroImg";
import { VerMaisBtn } from "../../components/VerMaisBtn";
import { quartosImg } from "../../components/ArrayImg/arrayImg";
import Loading from "../../components/LoadingAnimation";

import './Index.css'

const display = {
	display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
}

export const Experiencias = () => {

    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://apihotelresiliapalace.herokuapp.com/experience"

    useEffect(() => {
        const getExperiencias = async () => {
            try {
                const response = await axios.get(url);
                setLoading(false);
                setDados(response.data);
            } catch (error) {
                console.log("tratar nosso erro aqui");
            }
        };

        getExperiencias();
    }, []);
    console.log(dados)



    return (
        <>
            <HeroImg><h1>Experiências</h1></HeroImg>

            <main>

                <CardLista1 id="expList">
                {loading && <><Loading/></>}
                    {dados.map((item) => {
                        return (

                            <li key={item.id} className="cardsListaItem">

                                <div className="cardsListaImg">
                                    <img src={item.url} alt="experiencias" />
                                </div>

                                <div className="cardsListaInfo">
                                    <p>{item.nome}</p>
                                    <div style={display} className="descricaoItem">
										<p className="descricaoInfo">Sobre: {item.descricao}</p>
										<p className="descricaoInfo">Quantidade de pessoas: {item.qtd_pessoas}</p>
										<p className="descricaoInfo">Horário: {item.horario}</p>
                                        <p className="descricaoInfo">Dia: {item.dia_semana}</p>
										<p className="descricaoInfo">Valor: R${item.valor_exp}</p>
									</div>
                                </div>

                            </li>
                        )
                    })}
                </CardLista1>

            </main>

        </>
    )
}
