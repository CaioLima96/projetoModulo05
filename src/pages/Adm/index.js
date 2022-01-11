import React, {useState, useEffect} from "react";
import axios from "axios";

import { CardLista1 } from "../../components/CardLista1";
import { quartosImg } from "../../components/ArrayImg/arrayImg";
import Loading from "../../components/LoadingAnimation";
import { ReserveAquiBtn } from "../../components/ReserveAquiBtn"

import quarto3 from "../../assets/img/quarto3.jpg"

import './styles.css'
import { AdmMain, AdmTab, AdmImg, AdmInfo, EventoForm } from "./styled";

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
				nome: document.getElementById('nomeEvento').value,
                data_inicio: document.getElementById('dataInicio').value,
                data_fim: document.getElementById('dataFim').value,
                qtd_pessoas: document.getElementById('qtdPessoas').value,
                valor_event: document.getElementById('valorEvento').value,
                faixa_etaria: document.getElementById('idade').value,
                descricao: document.getElementById('descricaoEvento').value,
                duracao: document.getElementById('duracaoEvento').value,
                local_event: document.getElementById('localEvento').value,
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
		
			<AdmMain className="admMain">

				<ReserveAquiBtn>ADICIONAR EVENTO</ReserveAquiBtn>

				<EventoForm id="eventoForm">
					<div className="input-field">
                        <label htmlFor="nomeEvento">Nome evento</label>
                        <input id="nomeEvento" type="text" placeholder="Digite o nome do evento aqui" required></input>
                    </div>

					<div className="input-field">
                        <label htmlFor="dataInicio">Data de inicio</label>
                        <input id="dataInicio" type="date" placeholder="Escolha a data de inicio" required></input>
                    </div>

					<div className="input-field">
                        <label htmlFor="dataFim">Data de fim</label>
                        <input id="dataFim" type="date" placeholder="Escolha a data de inicio" required></input>
                    </div>

					<div className="input-field">
                        <label htmlFor="qtdPessoas">Qtd pessoas</label>
                        <input id="qtdPessoas" type="number" placeholder="Qtd de pessoas" required></input>
                    </div>

					<div className="input-field">
                        <label htmlFor="valorEvento">Valor do evento</label>
                        <input id="valorEvento" type="number" placeholder="Digite o valor do evento aqui" required></input>
                    </div>

					<div className="input-field">
                        <label htmlFor="valorEvento">Faixa etária</label>
                        <input id="idade" type="text" placeholder="Digite a faixa etária aqui" required></input>
                    </div>

					<div className="input-field">
                        <label htmlFor="descricaoEvento">Descrição do evento</label>
                        <input id="descricaoEvento" type="text" placeholder="Digite a descrição do evento aqui" required></input>
                    </div>

					<div className="input-field">
                        <label htmlFor="duracaoEvento">Duração do evento</label>
                        <input id="duracaoEvento" type="time" placeholder="Digite a duração do evento aqui" required></input>
                    </div>

					<div className="input-field">
                        <label htmlFor="localEvento">Duração do evento</label>
                        <input id="localEvento" type="text" placeholder="Digite a duração do evento aqui" required></input>
                    </div>
				</EventoForm>

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

			</AdmMain>

		</>
       
    )
}