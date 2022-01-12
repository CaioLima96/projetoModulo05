import React from "react";
import { ReserveAquiBtn } from "../ReserveAquiBtn";
import {FooterContent, Footer as FooterTag} from './styles'

const Footer = () => {
    return (

        <FooterTag>

            <FooterContent>

                <ReserveAquiBtn>RESERVE AQUI</ReserveAquiBtn>

                <div className="divBar"></div>

                <ul>

                    <li>Nossa Localização</li>
                    <li>Ipanema</li>
                    <li>Rio de Janeiro - Brasil</li>
                    <li>CEP: 22081-050</li>

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