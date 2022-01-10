import React from "react";

import { LoadingContainer, LoadingAnimation, LoadingItem, LoadingImg } from "./styles";
import logo1 from '../../assets/img/logo/logo1.png'


const Loading = () => {
    return (

        <LoadingContainer id="loader">

            <LoadingImg><img src={logo1} alt="Logo"></img></LoadingImg>
            <p>Carregando...</p>

            <LoadingAnimation>

                <LoadingItem></LoadingItem>

            </LoadingAnimation>

        </LoadingContainer>
    )
}

export default Loading