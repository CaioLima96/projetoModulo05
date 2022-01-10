import styled from 'styled-components'

export const LoadingContainer = styled.div`
    text-align: center;
    margin-bottom: 20px;

    p {
        margin: 1rem 0;
    }
`

export const LoadingAnimation = styled.div`
    max-width: 300px;
    width: 100%;
    margin: 0 auto;

    transform: skewX(-45deg);

    overflow: hidden ;
    background-color: var(--loadingBg);
`

export const LoadingItem = styled.div`
    width: 70px;
    height: 20px;

    position: relative;
    right: 102px;

    background-color: var(--loadingItem2);

    animation: moveRight 1s infinite linear;
    
    @keyframes moveRight{
        0%{
            right: 102px
        }
        100%{
            right: -307px
        }
    }
`

export const LoadingImg = styled.div`
    /* width: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    } */
`