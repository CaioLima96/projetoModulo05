import React, {useState, useEffect} from "react";
import { HeroImg } from "../../components/HeroImg/Index";
import { ImagensLista1 } from "../../components/ImagensLista1/Index";
import Reservar from '../../components/Reservar'
import axios from "axios";

import './styles.css'

export const Quartos = () => {

    const [dados, setDados] = useState([]);

    const url = "https://apihotelresiliapalace.herokuapp.com/user"

    useEffect(() => {
        const getDrinks = async () => {
          try {
            const response = await axios.get(url);
            setDados(response);
          } catch (error) {
            console.log("tratar nosso erro aqui");
          }
        };
        // axios
        //   .get(url)
        //   .then((response) => {
        //     setLoading(false);
        //     setDados(response.data.drinks);
        //   })
        //   .catch((error) => {
        //     console.log("tratar nosso erro aqui");
        //   });
    
        getDrinks();
    }, []);
    console.log(dados)

    return (
        <>
            <HeroImg/>

            <main>
                <ImagensLista1/>
            </main>
            
        </>
    )
}