import styled from 'styled-components'

export const ContainerGaleria = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;

    li {
    width: 320px;
    margin: 1% !important;
}

    .foto {
        width: 100%;
    
}

    .foto img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`