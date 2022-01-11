import React, {useState, useEffect} from "react";
import axios from "axios";

import { CardLista1 } from "../../components/CardLista1";
import { VerMaisBtn } from "../../components/VerMaisBtn"
import { quartosImg } from "../../components/ArrayImg/arrayImg";
import Loading from "../../components/LoadingAnimation";

import quarto3 from "../../assets/img/quarto3.jpg"

import './styles.css'
import { AdmTab, AdmImg, AdmInfo } from "./styled";

export const Adm = () => {

    const [dados, setDados] = useState([]);
	const [loading, setLoading] = useState(true);

    const url = "https://apihotelresiliapalace.herokuapp.com/event"

    useEffect(() => {
        const getEvent = async () => {
			try {
				const response = await axios.get(url);
				setLoading(false);
				setDados(response.data);
			} catch (error) {
				console.log("tratar nosso erro aqui");
			}
        };
    
        getEvent();
    }, []);

	const postEvent = async () => {
		await axios.post(`https://apihotelresiliapalace.herokuapp.com/event`,
			{
				nome: document.getElementById('nome').value,
                data_inicio: document.getElementById('dataInicio').value,
                data_fim: document.getElementById('dataFim').value,
                qtd_pessoas: document.getElementById('qtdPessoas').value,
                valor_event: document.getElementById('valor').value,
                faixa_etaria: document.getElementById('idade').value,
                descricao: document.getElementById('descricao').value,
                duracao: document.getElementById('duracao').value,
                local_event: document.getElementById('local').value,
			}
			.then((response) => {
				alert(response)
			})
			.catch((error) => {
				alert(error)
			})
		)
	}


    console.log(dados)

    return (

		<>
			<AdmTab>

				<h1>ADM FICHA</h1>

				<div>
					<AdmImg ><img src={quarto3}/></AdmImg>

					<AdmInfo>

						<h2>Nome</h2>
						<p>Id:</p>
						<p>Cargo:</p>

					</AdmInfo>
				</div>

			</AdmTab>
			
			<main className="admRow">
				<button>ADICIONAR EVENTO</button>
				<form>
					<label >NOME</label>
					<input id="nome" onClick={() => postEvent()}></input>
				</form>
				<CardLista1>
					{loading && <><Loading/></>}
					{dados.map((item) => {
						return (
							<li key={item.id} className="cardsListaItem">

								<div className="cardsListaImg">
									<img src={quartosImg[0].imgPath} alt="quarto"/>
								</div>

								<div className="cardsListaInfo">
									<p>{item.nome}</p>
									<p id="deleteBtn">Deletar</p>
									<p id="editBtn">Editar</p>
								</div>

							</li>
						)
					})}
				</CardLista1>

			</main>

		</>
       
    )
}