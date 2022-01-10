import React from 'react';

import { CarouselLeft } from "./carouselLeft/carouselLeft.js"
import { CarouselRight } from ".//carouselRight/carouselRight.js"


export const CarouselLayout = ({ children }) => {
    return (
        <>
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
              <p>Testes tstetststaafajafhhhhhhhhhssssssssssssssshhhh</p>
            </div>
            </CarouselLeft>

            <CarouselRight>
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
              <p>Testes tstetststaafajafhhhhhhhhhssssssssssssssshhhh</p>
            </div>
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
              <h1>Quartos</h1>
              <hr></hr>
              <p>Testes tstetststaafajafhhhhhhhhhssssssssssssssshhhh</p>
            </div>
            </CarouselLeft>
        </> 
        
    );
}