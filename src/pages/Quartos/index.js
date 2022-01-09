import React, {useState, useEffect} from "react";
import axios from "axios";

import { HeroImg } from "../../components/HeroImg/Index";
import { ImagensLista1 } from "../../components/ImagensLista1/Index";
import { VerMaisBtn } from "../../components/VerMaisBtn/Index"
import { quartosImg } from "../../components/ArrayImg/arrayImg";

import './styles.css'

export const Quartos = () => {

    const [dados, setDados] = useState([]);

    const url = "https://apihotelresiliapalace.herokuapp.com/room"

    useEffect(() => {
        const getRoom = async () => {
			try {
				const response = await axios.get(url);
				setDados(response.data);
			} catch (error) {
				console.log("tratar nosso erro aqui");
			}
        };
    
        getRoom();
    }, []);
    console.log(dados)

	
	
	// let apiLoop = () => {
	// 	var teste = () => {
	// 		{for(let i = 0; i < quartosImg.length; i++){
	// 			{dados.map((item) => {
	// 				return (

	// 					<li class="quartoListaItem">

	// 						<div class="quartoListaImg">
	// 							<img src={quartosImg[0].imgPath} alt="quarto"/>
	// 						</div>

	// 						<div class="quartoListaInfo">
	// 							<p>{item.tipo_de_quarto}</p>
	// 							<VerMaisBtn/>
	// 						</div>

	// 					</li>
	// 				)
	// 			})}
	// 		}}
	// 	}

	// 	return teste
	// }

    return (
        <>
            <HeroImg><h1>QUARTOS</h1></HeroImg>

            <main>

				<ImagensLista1>
					{dados.map((item) => {
						return (

							<li key={item.id} class="quartoListaItem">

								<div class="quartoListaImg">
									<img src={quartosImg[0].imgPath} alt="quarto"/>
								</div>

								<div class="quartoListaInfo">
									<p>{item.tipo_de_quarto}</p>
									<VerMaisBtn/>
								</div>

							</li>
						)
					})}
				</ImagensLista1>

            </main>
            
        </>
    )
}