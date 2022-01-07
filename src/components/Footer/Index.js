import React from "react";
import { RerserveAquiBtn } from "../ReserveAquiBtn";
import {FooterContent, Footer as FooterTag} from './styles'

const Footer = () => {
    return (

        <FooterTag>

            <FooterContent>

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

// class Footer extends React.Component {

//     render(){

//         return (

//             <FooterTag>

//                 <FooterContent>

//                     <RerserveAquiBtn/>

//                     <div class="divBar"></div>

//                     <ul>

//                         <li>Nossa Localização</li>
//                         <li>Bairro do Limoeiro</li>
//                         <li>São Paulo - Brasil</li>
//                         <li>CEP: 20010-010</li>

//                     </ul>

//                     <div class="divBar"></div>

//                     <ul>

//                         <li>Fale conosco</li>
//                         <li>Reserva: 4002-8922</li>
//                         <li>Duvidas: 2569-6969</li>
//                         <li>Equipe</li>

//                     </ul>
                    
//                 </FooterContent>

//             </FooterTag>
//         )
//     }
// }

export default Footer