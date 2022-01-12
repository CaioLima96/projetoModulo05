import React, { useState, useEffect } from "react";
import axios from "axios";

import { CardLista1 } from "../../components/CardLista1";
import { quartosImg } from "../../components/ArrayImg/arrayImg";
import Loading from "../../components/LoadingAnimation";
import { ReserveAquiBtn } from "../../components/ReserveAquiBtn"

import './styles.css'
import { StaffTab, StaffImg, StaffInfo, EventoForm, EventListStaff, StaffMain, } from "./styled";

import quarto3 from "../../assets/img/quarto3.jpg"
import plus1 from "../../assets/img/icons/plus1.png"
import arthom from "../../assets/img/arthom.jpg"




//===============================================



export const Staff = () => {

	const [dados, setDados] = useState([]);
	const [loading, setLoading] = useState(true);
	const [mostraForm, setMostraForm] = useState(false)

	const [mostraEdit, setEdit] = useState(false)
	const [dadosEdit, setDadosEdit] = useState();

	const url = "https://apihotelresiliapalace.herokuapp.com/event"

	const getEvent = async () => {
		try {
			const response = await axios.get(url);
			setLoading(false);
			setDados(response.data);
		} catch (error) {
			alert(JSON.stringify(error))
		}
	};

	useEffect(() => {
		getEvent();
	}, []);

	const postEvent = () => {
		axios.post(`https://apihotelresiliapalace.herokuapp.com/event`,
			{
				nome: document.getElementById('nomeEvento').value,
				data_inicio: document.getElementById('dataInicio').value + " 13:30:00",
				data_fim: document.getElementById('dataFim').value + " 13:30:00",
				qtd_pessoas: Number(document.getElementById('qtdPessoas').value),
				valor_event: Number(document.getElementById('valorEvento').value).toFixed(2),
				faixa_etaria: document.getElementById('idade').value,
				descricao: document.getElementById('descricaoEvento').value,
				duracao: document.getElementById('duracaoEvento').value,
				local_event: document.getElementById('localEvento').value,
				url: document.getElementById('urlEvento').value,
			}
		)
			.then((response) => {
				console.log(response.data)
				alert(response.data.mensagem)
				getEvent()
			})
			.catch((error) => {
				alert(JSON.stringify(error))
			}
			)

	}

	const updateEvent = (id) => {
		axios.put(`https://apihotelresiliapalace.herokuapp.com/event/${id}`,
			{
				nome: document.getElementById('nomeEvento').value,
				data_inicio: document.getElementById('dataInicio').value + " 13:30:00",
				data_fim: document.getElementById('dataFim').value + " 13:30:00",
				qtd_pessoas: Number(document.getElementById('qtdPessoas').value),
				valor_event: Number(document.getElementById('valorEvento').value).toFixed(2),
				faixa_etaria: document.getElementById('idade').value,
				descricao: document.getElementById('descricaoEvento').value,
				duracao: document.getElementById('duracaoEvento').value,
				local_event: document.getElementById('localEvento').value,
				url: document.getElementById('urlEvento').value,
			}
		)
			.then((response) => {
				alert(response.data.mensagem)
				getEvent()
				setEdit(false)
			})
			.catch((error) => {
				alert(JSON.stringify(error))
			}
			)

	}

	const deleteEvente = (id) => {
		axios.delete(`https://apihotelresiliapalace.herokuapp.com/event/${id}`)
			.then((response) => {
				alert(response.data.mensagem)
				getEvent()
			})
			.catch((error) => {
				alert(JSON.stringify(error))
			})
	}

	console.log(dados)

	return (

		<>
			<StaffTab id="staffInfo" className="lala">

				<h1>STAFF FICHA</h1>

				<div>
					<StaffImg ><img src={arthom} /></StaffImg>

					<StaffInfo>

						<h2>Arthom</h2>
						<p>Id: dc61f1ac-6572-4eae-86ae-c7ae596ac7a5</p>
						<p>Cargo: Recepcionista</p>

					</StaffInfo>
				</div>

			</StaffTab>

			<StaffMain className="staffMain">

				<button onClick={() => setMostraForm(!mostraForm)}>ADICIONAR EVENTO <img src={plus1} /></button>

				{mostraForm ?

					<EventoForm id="eventoForm"  >
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
							<input id="duracaoEvento" type="text" placeholder="Digite a duração do evento aqui" required></input>
						</div>

						<div className="input-field">
							<label htmlFor="localEvento">Local do evento</label>
							<input id="localEvento" type="text" placeholder="Digite a duração do evento aqui" required></input>
						</div>

						<div className="input-field">
							<label htmlFor="urlEvento">Url da imagem do evento</label>
							<input id="urlEvento" type="text" placeholder="Digite a url do evento aqui" required></input>
						</div>

						<button onClick={() => postEvent()}>ENVIAR</button>
					</EventoForm>

					: null}

				<CardLista1 id="eventListStaff">
					{loading && <><Loading /></>}
					{dados.map((item) => {
						return (
							<li key={item.id} id="eventListItemStaff" className="cardsListaItem">

								<div className="cardsListaImg">
									<img src={item.url} alt={item.nome} />
								</div>

								<div className="cardsListaInfo">
									<p>{item.nome}</p>
									{/* <div>
										<p>Data inicio: {item.data_inicio}</p>
										<p>Data inicio: {item.data_fim}</p>
									</div> */}
									<div>
										<p onClick={() => { setEdit(!mostraEdit); setDadosEdit(item); }} id="editBtn">Editar</p>
										<p onClick={() => deleteEvente(item.id)} id="deleteBtn">Deletar</p>
									</div>
								</div>

							</li>
						)
					})}
				</CardLista1>

				{mostraEdit ?
					<div id="staffEditModal">
						<EventoForm id="eventoForm"  >
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
								<input id="duracaoEvento" type="text" placeholder="Digite a duração do evento aqui" required></input>
							</div>

							<div className="input-field">
								<label htmlFor="localEvento">Local do evento</label>
								<input id="localEvento" type="text" placeholder="Digite a duração do evento aqui" required></input>
							</div>

							<div className="input-field">
								<label htmlFor="urlEvento">Url da imagem do evento</label>
								<input id="urlEvento" type="text" placeholder="Digite a url do evento aqui" required></input>
							</div>

							<button onClick={() => updateEvent(dadosEdit.id)}>ENVIAR</button>
							{console.log("teste: " + dados[1].id)}
							<p onClick={() => setEdit(!mostraEdit)}>Fechar X</p>
						</EventoForm>
					</div>
					: null}



			</StaffMain>

		</>

	)
}