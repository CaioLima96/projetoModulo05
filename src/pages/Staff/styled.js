import styled from 'styled-components'

export const StaffTab = styled.div`
    max-width: 1050px;
    width: 67.5%;
    margin: 2.25rem auto 0;


    h1 {
        text-align: center;
        margin-bottom: 1.25rem;
    }

    > div {
        display: flex;
        
    }

    @media (max-width: 1024px){
        width: 90%;

        > div {
            flex-direction: column;
            align-items: center;
        }
    }
`

export const StaffImg = styled.div`
    max-width: 400px;
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`

export const StaffInfo = styled.div `
    margin-left: 1rem;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 0.625rem;
    }

    @media (max-width: 1024px){
        margin-left: 0;
    }
`

export const EventoForm = styled.form `
    display: flex;
    flex-direction: column;

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

export const StaffMain = styled.main`

    display: flex;
    flex-direction: column;
    position: relative;

    button {
        align-self: center;
        padding: 0.625rem 1rem 0.563rem 1rem;
        margin-bottom: 1.875rem;
        font-size: 1rem;

        img {
            width: 12px;
        }
    }

    #eventListItemStaff {
        position: initial;
        overflow: initial;
        height: fit-content;

        .cardsListaInfo {
            width: 100%;

            position: initial;
            padding: 0.625rem;

            border-radius: initial;

            p{
                margin: 0;
            }

            div {
                display: flex;
                justify-content: center;

                margin: 1rem 0 0.125rem;
                
                p {
                    font-size: 1rem;
                }

                p:first-child{
                    margin-right: 1rem;
                }
            }
        }
    }

    #staffEditModal {
        display: none;
        width: 100%;
        height: 100%;

        position: fixed;
        top: 0;
        left: 0;

        padding: 0px 8rem;
        overflow-y: scroll;
        z-index: 20;
        background-color: #30303070;

        form {
            padding: 2.125rem;
            background-color: white;
        }

        @media(max-width: 420px) {
            padding: 0px 1.25rem !important;
        }

        @media(max-width: 600px) {
            padding: 0px 2.5rem;
        }
    }
    
`

export const EventListStaff = styled.ul`
`