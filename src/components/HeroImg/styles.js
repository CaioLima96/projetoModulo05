import styled from 'styled-components'

export const HeroImgContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 90%;

    background-image: url("../../assets/img/hero.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h1 {

        font-size: 3.125rem;
        color:  #f8f8ff;
        text-transform: uppercase;
        padding: 0.188rem 0.625rem;
        border-radius: 0.188rem;
        background-color: var(--black1);
    }
       
`