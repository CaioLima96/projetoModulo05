import React from 'react';
import { HeroImg } from "../../components/HeroImg/Index";
import { Carousel } from "./carousel/carouselComp"
// import Layout from "../../components/Layout"

import './styles.css'

export default () => {
  return (
    <>
      <HeroImg />
      <main>
        <Carousel />
      </main>
      {/* <Layout/> PQ DUPLICOU? */}
    </>
  )
}


