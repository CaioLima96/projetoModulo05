import React, { useState, useEffect } from "react";
import axios from "axios";

import { CardLista1 } from "../../components/CardLista1";
import { HeroImg } from "../../components/HeroImg";
import { VerMaisBtn } from "../../components/VerMaisBtn";
import { quartosImg } from "../../components/ArrayImg/arrayImg";
import Loading from "../../components/LoadingAnimation";

import './Index.css'

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

                <CardLista1>
                {loading && <><Loading/></>}
                    {dados.map((item) => {
                        return (

                            <li key={item.id} className="cardsListaItem">

                                <div className="imagemListaImg">
                                    <img src={quartosImg[0].imgPath} alt="experiencias" />
                                </div>

                                <div className="cardsListaInfo">
                                    <p>{item.nome}</p>
                                    <VerMaisBtn />
                                </div>

                            </li>
                        )
                    })}
                </CardLista1>

            </main>

        </>
    )
}
