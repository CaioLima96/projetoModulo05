import styled from 'styled-components'


export const CardsLista = styled.ul `
    display: flex;
    flex-wrap: wrap;
    
    list-style: none;

    #loader {
        margin: 0 auto;
    }

    .cardsListaItem {
        max-width: 450px;
        width: 100%;
        height: 353px;

        position: relative;
        overflow: hidden;

        margin: 1%;
    }

    .cardsListaImg {
        width: 100%;
        height: 292px;
    }

    .cardsListaImg img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .cardsListaInfo {
        width: 80%;
        
        position: absolute;
        bottom: 0px;
        left: 10%;

        border-radius: 5px;
        text-align: center;
        background-color: white;

        div {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;

            margin-bottom: 0.313rem;

            p {
                font-size: 14px;
                margin: 0 0.313rem 0.313rem 0;
            }
        }
    }

    .cardsListaInfo p {
        font-size: 1.25rem;
        margin: 1.125rem 0 2.375rem 0;
        text-transform: capitalize;
    }

    .cardsListaItem button {
        color: black;
    }

    @media(max-width: 500px){
        
        .cardsListaItem {
            margin: 0 0 1rem 0;
        }
    }

    @media(max-width: 1190px) {

        justify-content: center;

        .cardsListaItem {
            max-width: 379px;
        }
    }
`