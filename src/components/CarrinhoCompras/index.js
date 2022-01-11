import React from "react";
import { RerserveAquiBtn } from "../ReserveAquiBtn";
import axios from "axios";

import { ReserveAquiTab, Form} from "./styles";

// function Cadastrar(){
//     const url = "https://apihotelresiliapalace.herokuapp.com/booking"

//     axios.post('/user', {
//         firstName: 'Fred',
//         lastName: 'Flintstone'
//       })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// }

const CarrinhoCompra = ({mostra, mostraCarrinho}) => {


    
    return (
        <ReserveAquiTab className={mostra ? 'showHideReserva': ''}>

            <><p onClick={() => mostraCarrinho()}>Fechar X</p><br/></>

            <form>
                <Form>

                    <div className="input-field">
                        <label for="dataChegada">Data de chegada</label>
                        <input id="dataChegada" type="date" placeholder="Data de chegada" required></input>
                    </div>

                    <div className="input-field">
                        <label for="dataSaida">Data de saída</label>
                        <input id="dataSaida" type="date" placeholder="Data de saída" required></input>
                    </div>

                    <div className="input-field">
                        <label for="quartosSelect">Quartos</label>
                        <select id="quartosSelect">
                            <option selected disabled value="">Selecione um quarto</option>
                            <option>Casal Simples</option>
                            <option>Triplo</option>
                            <option>Duplo</option>
                            <option>Casal de Luxo</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label for="eventosSelect">Eventos</label>
                        <select id="eventosSelect">
                            <option selected disabled value="">Selecione um evento</option>
                            <option>Colonia de Férias</option>
                            <option>Festa Tradicional da cidade</option>
                            <option>Eventos Corporativos</option>
                            <option>Cursos e Workshops</option>
                        </select>
                    </div>

                    <div className="input-field">
                        <label for="expSelect">Experiências</label>
                        <select id="expSelect">
                            <option selected disabled value="">Selecione uma experiências</option>
                            <option>Massagem Facial</option>
                            <option>Jantar à luz de velas</option>
                            <option>Chá da Tarde</option>
                            <option>Lorem ipsum</option>
                        </select>
                    </div>

                </Form>

                <Form>

                    <div className="input-field">
                        <label for="fullName">Nome completo</label>
                        <input id="fullName" type="text" placeholder="Digite seu nome completo aqui" required></input>
                    </div>

                    <div className="input-field">
                        <label for="email">Email</label>
                        <input id="email" type="email" placeholder="Digite seu email aqui" required></input>
                    </div>

                    <div className="input-field">
                        <label for="cpf">CPF</label>
                        <input id="cpf" type="number" placeholder="Digite seu cpf aqui" required></input>
                    </div>

                    <div className="input-field">
                        <label for="senha">Senha</label>
                        <input id="senha" type="password" placeholder="Digite sua senha aqui" required></input>
                    </div>

                </Form>

                <Form>

                    <div className="input-field">
                        <label for="CEP">CEP</label>
                        <input id="CEP" type="number" placeholder="Digite seu CEP aqui" required></input>
                    </div>

                    <div className="input-field">
                        <label for="logradouro">Logradouro</label>
                        <input id="logradouro" type="text" placeholder="Digite seu logradouro aqui" required></input>
                    </div>

                    <span>
                        <div className="input-field">
                            <label for="numero">Número</label>
                            <input id="numero" type="number" placeholder="Numero" required></input>
                        </div>

                        <div className="input-field">
                            <label for="complemento">Complemento</label>
                            <input id="complemento" type="text" placeholder="Complemento" required></input>
                        </div>
                    </span>

                    <div className="input-field">
                        <label for="bairro">Bairro</label>
                        <input id="bairro" type="text" placeholder="Digite seu bairro aqui" required></input>
                    </div>

                    <span>
                        <div className="input-field">
                            <label for="cidade">Cidade</label>
                            <input id="cidade" type="text" placeholder="Digite sua cidade aqui" required></input>
                        </div>

                        <div className="input-field">
                            <label for="estado">Estado</label>
                            <input id="estado" type="text" placeholder="Estado" required></input>
                        </div>
                    </span>
                </Form>
            </form>

            <RerserveAquiBtn>RESERVAR</RerserveAquiBtn>

            <><p onClick={() => mostraCarrinho()}>Fechar X</p><br/></>

        </ReserveAquiTab>
    )
}

export default CarrinhoCompra