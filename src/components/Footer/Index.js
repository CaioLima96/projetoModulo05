import React from "react";
import { RerserveAquiBtn } from "../ReserveAquiBtn";
import {FooterContent, Footer as FooterTag} from './styles'


class Footer extends React.Component {

    render(){

        const teste = 'red'
        return (

            <FooterTag>

                <FooterContent bolinha={teste} banana batata uva>

                    <RerserveAquiBtn/>

                    <div class="divBar"></div>

                    <ul>

                        <li>Nossa Localização</li>
                        <li>Bairro do Limoeiro</li>
                        <li>São Paulo - Brasil</li>
                        <li>CEP: 20010-010</li>

                    </ul>

                    <div class="divBar"></div>

                    <ul>

                        <li>Fale conosco</li>
                        <li>Reserva: 4002-8922</li>
                        <li>Duvidas: 2569-6969</li>
                        <li>Equipe</li>

                    </ul>
                    
                </FooterContent>

            </FooterTag>
        )
    }
}

export default Footer