import React from "react";
import { ReserveAquiBtn } from "../ReserveAquiBtn";
import axios from "axios";

import { ReserveAquiTab, Fieldset} from "./styles";

function limpaInput(){
    
    console.log("carrinho")
    document.getElementById('dataChegada').value = ""
    document.getElementById('dataSaida').value = ""
    document.getElementById('quartosSelect').value = ""
    document.getElementById('eventosSelect').value = ""
    document.getElementById('expSelect').value = ""
    document.getElementById('fullName').value = ""
    document.getElementById('email').value = ""
    document.getElementById('cpf').value = ""
    document.getElementById('senha').value = ""
    document.getElementById('CEP').value = ""
    document.getElementById('logradouro').value = ""
    document.getElementById('numero').value = ""
    document.getElementById('complemento').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('estado').value = ""

    alert('Reserva feita com sucesso!')
}

const CarrinhoCompra = ({mostra, mostraCarrinho}) => {
    
    return (
        <ReserveAquiTab className={mostra ? 'showHideReserva': ''}>

            <><p onClick={() => mostraCarrinho()}>Fechar X</p><br/></>

            <form>
                <Fieldset>

                    <div className="input-field">
                        <label htmlFor="dataChegada">Data de chegada</label>
                        <input id="dataChegada" type="date" placeholder="Data de chegada" required data-input></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="dataSaida">Data de saída</label>
                        <input id="dataSaida" type="date" placeholder="Data de saída" required data-input></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="quartosSelect">Quartos</label>
                        <select id="quartosSelect" data-input>
                            <option selected disabled value="">Selecione um quarto</option>
                            <option>Casal Simples</option>
                            <option>Triplo</option>
                            <option>Duplo</option>
                            <option>Casal de Luxo</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label htmlFor="eventosSelect">Eventos</label>
                        <select id="eventosSelect" data-input>
                            <option selected disabled value="">Selecione um evento</option>
                            <option>Colonia de Férias</option>
                            <option>Festa Tradicional da cidade</option>
                            <option>Eventos Corporativos</option>
                            <option>Cursos e Workshops</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label htmlFor="expSelect">Experiências</label>
                        <select id="expSelect" data-input>
                            <option selected disabled value="">Selecione uma experiências</option>
                            <option>Massagem Facial</option>
                            <option>Jantar à luz de velas</option>
                            <option>Chá da Tarde</option>
                            <option>Lorem ipsum</option>
                        </select>
                    </div>

                </Fieldset>

                <Fieldset>

                    <div className="input-field">
                        <label htmlFor="fullName">Nome completo</label>
                        <input id="fullName" type="text" placeholder="Digite seu nome completo aqui" required data-input></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Digite seu email aqui" required data-input></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="number" placeholder="Digite seu cpf aqui" required data-input></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="senha">Senha</label>
                        <input id="senha" type="password" placeholder="Digite sua senha aqui" required data-input></input>
                    </div>

                </Fieldset>

                <Fieldset>

                    <div className="input-field">
                        <label htmlFor="CEP">CEP</label>
                        <input id="CEP" type="number" placeholder="Digite seu CEP aqui" required data-input></input>
                    </div>

                    <div className="input-field">
                        <label htmlFor="logradouro">Logradouro</label>
                        <input id="logradouro" type="text" placeholder="Digite seu logradouro aqui" required data-input></input>
                    </div>

                    <span>
                        <div className="input-field">
                            <label htmlFor="numero">Número</label>
                            <input id="numero" type="number" placeholder="Numero" required data-input></input>
                        </div>

                        <div className="input-field">
                            <label htmlFor="complemento">Complemento</label>
                            <input id="complemento" type="text" placeholder="Complemento" required data-input></input>
                        </div>
                    </span>

                    <div className="input-field">
                        <label htmlFor="bairro">Bairro</label>
                        <input id="bairro" type="text" placeholder="Digite seu bairro aqui" required data-input></input>
                    </div>

                    <span>
                        <div className="input-field">
                            <label htmlFor="cidade">Cidade</label>
                            <input id="cidade" type="text" placeholder="Digite sua cidade aqui" required data-input></input>
                        </div>

                        <div className="input-field">
                            <label htmlFor="estado">Estado</label>
                            <input id="estado" type="text" placeholder="Estado" required data-input></input>
                        </div>
                    </span>
                </Fieldset>
            </form>

            <button onClick={() => limpaInput()}>RESERVAR</button>

            <p onClick={() => mostraCarrinho()}>Fechar X</p>

        </ReserveAquiTab>
    )
}

export default CarrinhoCompra