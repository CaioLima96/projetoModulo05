import styled from 'styled-components'

export const AdmMain = styled.main`

    display: flex;
    flex-direction: column;

    button {
        align-self: center;
    }
`

export const AdmTab = styled.div`
    max-width: 1050px;
    width: 67.5%;
    margin: 2.25rem auto 0;

    grid-template-rows: 60px 1fr 1fr 245px !important;

    h1 {
        text-align: center;
        margin-bottom: 1.25rem;
    }

    > div {
        display: flex;
    }

    border: 1px solid red;

    @media (max-width: 1024px){
        width: 90%
    }
`

export const AdmImg = styled.div`
    max-width: 400px;
    width: 100%;
    height: 400px;

    background-color: black;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const AdmInfo = styled.div `
    margin-left: 1rem;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 0.625rem;
    }
`

export const EventoForm = styled.form `

    .input-field {
        display: flex;
        flex-direction: column;

        width: 100%;
        margin-bottom: 1.563rem;

        label {
            margin-bottom: 0.313rem;
        }

        input, select {
            padding: 0.125rem 0.188rem 0.188rem 0.375rem;
            height: 35px;
        }
    }
`