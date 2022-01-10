import styled from 'styled-components'


export const CardsLista = styled.ul `
    display: flex;
    flex-wrap: wrap;
    
    list-style: none;

    .cardsListaItem {
        max-width: 450px;
        width: 100%;
        height: 353px;

        position: relative;
        overflow: hidden;

        background-color: black;
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
    }

    .cardsListaInfo p {
        font-size: 1.25rem;
        margin: 1.125rem 0 2.375rem 0;
    }

    .cardsListaItem button {
        color: black;
    }
`