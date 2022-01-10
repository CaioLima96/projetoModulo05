import React from "react";

import { HeroImgContainer } from "./styles";

export const HeroImg = ({ children }) => {
    return (

        <HeroImgContainer id="heroImg">

            {children}

        </HeroImgContainer>
    )
}