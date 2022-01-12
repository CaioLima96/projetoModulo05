import React from 'react';
import { HeroImg } from "../../components/HeroImg";
import { CarouselLayout } from "./carouselComponent/carouselLayout"
// import Layout from "../../components/Layout"

import './styles.css'

export default () => {
  return (
    <>
      <HeroImg><h1>LAZER DE QUALIDADE</h1></HeroImg>
      <main>     
          <CarouselLayout/>
      </main>
    </>
  )
}

