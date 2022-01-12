import React from "react";
import { ReserveAquiBtn } from "../ReserveAquiBtn";
import {FooterContent, Footer as FooterTag} from './styles'

const Footer = ({mostraCarrinho}) => {
    return (

        <FooterTag>

            <FooterContent>

                <div onClick={() => mostraCarrinho()}><ReserveAquiBtn>RESERVE AQUI</ReserveAquiBtn></div>

                <div className="divBar"></div>

                <ul>

                    <li>Nossa Localização</li>
                    <li>Bairro do Limoeiro</li>
                    <li>São Paulo - Brasil</li>
                    <li>CEP: 20010-010</li>

                </ul>

                <div className="divBar"></div>

                <ul>

                    <li>Fale conosco</li>
                    <li>Reserva: 4002-8922</li>
                    <li>Duvidas: 2569-6969</li>
                    <li>Email: hotelresiliapalace@gmail.com</li>
                    <li>Equipe</li>

                </ul>
                
            </FooterContent>

        </FooterTag>
    )
}

export default Footer