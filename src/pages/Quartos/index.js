import React, {useState, useEffect} from "react";
import axios from "axios";

import { HeroImg } from "../../components/HeroImg";
import { CardLista1 } from "../../components/CardLista1";
import Loading from "../../components/LoadingAnimation";

const display = {
	display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
}

export const Quartos = () => {

    const [dados, setDados] = useState([]);
	const [loading, setLoading] = useState(true);

    const url = "https://apihotelresiliapalace.herokuapp.com/room"

    useEffect(() => {
        const getRoom = async () => {
			try {
				const response = await axios.get(url);
				setLoading(false);
				setDados(response.data);
			} catch (error) {
				console.log("tratar nosso erro aqui");
			}
        };
    
        getRoom();
    }, []);
    console.log(dados)

    return (
        <>
            <HeroImg><h1>QUARTOS</h1></HeroImg>

            <main>
				
				<CardLista1 id="">
					{loading && <><Loading/></>}
					{dados.map((item) => {
						return (

							<li key={item.id} className="cardsListaItem">

								<div className="cardsListaImg">
									<img src={item.url} alt="quarto"/>
								</div>

								<div className="cardsListaInfo" >
									<p>{item.tipo_de_quarto}</p>
									<div style={display} className="descricaoItem">
										<p>Nº: {item.numero} -</p>
										<p>Qtd pessoas: {item.qtd_max_pessoas} -</p>
										<p>Status: {item.status} -</p>
										<p>Valor: R${item.valor_quarto}</p>
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