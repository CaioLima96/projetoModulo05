import React from 'react';

import { CarouselLeft } from "./carouselLeft/carouselLeft.js"
import { CarouselRight } from "./carouselRight/carouselRight.js"
import { CarouselCentral } from "./carouselSobre/carouselSobre.js"


export const CarouselLayout = () => {
    return (
        <>
            <CarouselCentral>
            <div id="textoCentro">
                    <h1>Sobre nós</h1>
                    <hr></hr>
                    <p>Muita coisa tem que ser dita sobre nós para nesse local falando sobre o projeto e coisas e tal , área onde vamos vincular iamgens da aprensentação e vai ser easy fazer isso o que adianta nosso processo</p>
                    <p>A caminho de ser melhor que o trivago!</p>
                    <hr></hr>
                </div>
               
            <section class="carouselCentro" aria-label="Gallery">
                    <ol class="carousel__viewport">

                        <li id="carousel__slide1"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide2"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide3"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide4"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                    </ol>
                    
                </section>
               
            </CarouselCentral>

            <CarouselLeft>
                <section class="carousel" aria-label="Gallery">
                    <ol class="carousel__viewport">

                        <li id="carousel__slide1"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide2"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide3"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide4"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                    </ol>
                </section>
                <div id="texto">
                    <h1>Quartos</h1>
                    <hr></hr>
                    <p>Durma tranquilo e relaxado em quartos de excelência feitos
                        especialmente para você!</p>
                    <p>De acomodações simples à suítes de luxo!</p>
                </div>
            </CarouselLeft>

            <CarouselRight>
                <div id="texto">
                    <h1>Experiências</h1>
                    <hr></hr>
                    <p>Algum texto sobre experiencia aqui tipo quando você abre o olho enquanto está nadando no mar de mongaguá, é uma péssima experiência..</p>
                </div>
                <section class="carousel" aria-label="Gallery">
                    <ol class="carousel__viewport">

                        <li id="carousel__slide1"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide2"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide3"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide4"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                    </ol>
                </section>
            </CarouselRight>

            <CarouselLeft>
                <section class="carousel" aria-label="Gallery">
                    <ol class="carousel__viewport">

                        <li id="carousel__slide1"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide2"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide3"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                        <li id="carousel__slide4"
                            tabIndex="0"
                            class="carousel__slide">
                            <div class="carousel__snapper"></div>
                        </li>
                    </ol>
                </section>
                <div id="texto">
                    <h1>Eventos</h1>
                    <hr></hr>
                    <p>Evento muitcho loucos acontecendo nesse cafofo galera venham conferir!</p>
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