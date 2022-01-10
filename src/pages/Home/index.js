import React from 'react';
import { HeroImg } from "../../components/HeroImg";
import { Carousel } from "./carousel/carouselComp"
// import Layout from "../../components/Layout"

import './styles.css'

export default () => {
  return (
    <>
      <HeroImg />
      <main>
        <>
          <Carousel>
          <section class="carousel" aria-label="Gallery">
                <ol class="carousel__viewport">

                    <li id="carousel__slide1"
                        tabindex="0"
                        class="carousel__slide">
                        <div class="carousel__snapper"></div>
                    </li>
                    <li id="carousel__slide2"
                        tabindex="0"
                        class="carousel__slide">
                        <div class="carousel__snapper"></div>
                    </li>
                    <li id="carousel__slide3"
                        tabindex="0"
                        class="carousel__slide">
                        <div class="carousel__snapper"></div>
                    </li>
                    <li id="carousel__slide4"
                        tabindex="0"
                        class="carousel__slide">
                        <div class="carousel__snapper"></div>
                    </li>
                </ol>
            </section>
            <div id="texto">
                <p>Testes tstetststaafajafhhhhhhhhhssssssssssssssshhhh</p>
            </div>
            </Carousel>
          {/* <Carousel />
          <Carousel /> */}
        </>
      </main>
      {/* <Layout/> PQ DUPLICOU? */}
    </>
  )
}


