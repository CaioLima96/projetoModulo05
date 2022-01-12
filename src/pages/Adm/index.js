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
			console.log("tratar nosso erro aqui");
		}
	};

    useEffect(() => {
        getEvent();
    }, []);

	const postEvent =  () => {
		console.log('teste api post')
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
			}
			)
			.then((response) => {
				alert(response)
				getEvent()
			})
			.catch((error) => {
				alert(error)
			}
		)
		
	}

	const deleteEvente = (id) => {
		axios.delete(`https://apihotelresiliapalace.herokuapp.com/event/${id}`)
		.then((response) => {
			alert(response)
			getEvent()
		})
		.catch((error) => {
			alert(error)
		})
	}



    console.log(dados)

    return (

		<>
			<AdmTab id="admInfo" className="lala">

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

				<button onClick={() => setMostraForm(!mostraForm)}>ADIVIONAR EVENTO</button>

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

				<button onClick={() => postEvent()}>ENVIAR</button>
				</EventoForm>
				
				: null}

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
									<p onClick={() => deleteEvente(item.id)} id="deleteBtn">Deletar</p>
									<p onClick={() => setEdit(!mostraEdit)} id="editBtn">Editar</p>
								</div>

							</li>
						)
					})}
				</CardLista1>

			</AdmMain>

		</>
       
    )
}