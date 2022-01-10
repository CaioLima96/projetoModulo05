import React, {useState, useEffect} from "react";
import axios from "axios";

import { ImagensLista2} from "../../components/ImagensLista2/Index";
import { HeroImg } from "../../components/HeroImg/index";

import './Index.css'

export const Experiencias = () => {
//     return (
//         <>
//             <HeroImg/> 
            
//           <main>
//               <ImagensLista2/>

              
//           </main>

//         </>
//     )
// 
const [dados, setDados] = useState([]);

const url = "https://apihotelresiliapalace.herokuapp.com/experiencias"

useEffect(() => {
    const getExperiencias = async () => {
        try {
            const response = await axios.get(url);
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

            <ImagensLista2>
                {dados.map((item) => {
                    return (

                        <li key={item.id} className="imagemListaItem">

                            <div className="imagemListaImg">
                                <img src={expImg[0].imgPath} alt="experiencias"/>
                            </div>

                            <div className="cardsListaInfo">
                                <p>{item.experiencias}</p>
                                <VerMaisBtn/>
                            </div>

                        </li>
                    )
                })}
            </ImagensLista2>

        </main>
        
    </>
)
}
