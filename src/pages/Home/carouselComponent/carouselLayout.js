import React from 'react';

import { CarouselLeft } from "./carouselLeft/carouselLeft.js"
import { CarouselRight } from "./carouselRight/carouselRight.js"
import { CarouselCentral } from "./carouselSobre/carouselSobre.js"
import { VerMaisBtn } from "../../../components/VerMaisBtn"


export const CarouselLayout = () => {
    return (
        <>
            <CarouselCentral>
                <div id="textoCentro">
                    <h1>Sobre nós</h1>
                    <hr></hr>
                    <p>Fundados no ano de 1996 somos um hotel que busca atender e oferecer aos nosso clientes serviços diferenciados no ramo de hospedagem e turismo com a intenção de promover momentos especiais e inesquecíveis.</p>
                    <p>Nossa missão ...</p>
                    <hr></hr>
                </div>
                <div id="canva">
                    <iframe loading="lazy" id="iframe" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAExQJqJQ5o&#x2F;view?embed"allowfullscreen="allowfullscreen" allow="fullscreen">
                    </iframe>
                </div>

            </CarouselCentral>

            <CarouselLeft>
                <section className="carousel" aria-label="Gallery">
                    <ol className="carousel__viewport">

                        <li id="carousel__slide1_room"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide2_room"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide3_room"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide4_room"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                    </ol>
                </section>
                <div id="texto">
                    <h1>Quartos</h1>
                    <hr></hr>
                    <p>Ao acordar abra a janela e sinta a brisa da Praia de Ipanema, relaxe com uma taça de champanhe refrescante em um dos nossos sofisticados ambientes.</p>
                    <p>Para desfrutar de uma pitada extra de magia você pode escolher entre uma de nossas suítes e criar memórias inesquecíveis.</p>
                    <VerMaisBtn />
                </div>
            </CarouselLeft>

            <CarouselRight>
                <div id="texto">
                    <h1>Experiências</h1>
                    <hr></hr>
                    <p>Além de requintadas suítes, oferecemos um experiências diferenciadas e exclusivas, que podem fazer de sua passagem pelo Resilia Palace uma passagem ainda mais marcante, experimente um jantar à luz de velas com pratos incríveis assinados por nossa premiada cozinha ou delicioso chá da tarde à beira da piscina, enquanto sente a deliciosa brisa de Ipanema.</p>
                    <VerMaisBtn />
                </div>
                <section className="carousel" aria-label="Gallery">
                    <ol className="carousel__viewport">

                        <li id="carousel__slide1_exp"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide2_exp"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide3_exp"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide4_exp"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                    </ol>
                </section>
            </CarouselRight>

            <CarouselLeft>
                <section className="carousel" aria-label="Gallery">
                    <ol className="carousel__viewport">

                        <li id="carousel__slide1_evt"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide2_evt"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide3_evt"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide4_evt"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                        </li>
                    </ol>
                </section>
                <div id="texto">
                    <h1>Eventos</h1>
                    <hr></hr>
                    <p>De uma reunião mais íntima até grandes eventos, temos o espaço ideal para a sua reunião ou comemoração.</p>
                    <VerMaisBtn />
                </div>
            </CarouselLeft>
        </>

    );
}


//* Imagens que preciso p/ Home

//** 4 imagens da nossa aprensentação

//** 4 imagens quartos 

//**  4 img eventos

//** 4 img exp