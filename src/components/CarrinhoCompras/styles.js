import styled from 'styled-components'

export const ReserveAquiTab = styled.div`

    display: none;
    flex-direction: column;
    align-items: center;

    max-width: 380px;
    width: 100%;

    position: absolute;
    right: 0;
    top: 7.9%;

    overflow-x: hidden;
    padding: 1.25rem;
    box-shadow: -10px 10px 22px -8px rgb(0 0 0 / 75%);
    background-color: white;

    p {
        align-self: flex-end;
        cursor: pointer;
    }

    p:not(p:first-child) {
        align-self: flex-start;
    }

    button {
        width: 100%;
        height: 55px;
        margin-bottom: 4.125rem;
        padding: 0.625rem 1rem 0.563rem 1rem;
    }

    /* form:not(form:last-child){
        margin-bottom: 5rem;
    } */

    div {
        margin-bottom: 4.375rem; 
    }
    
    @media (max-width: 600px) {
        max-width: 800px;
        box-shadow: 0px 15px 10px -7px rgb(0 0 0 / 75%);
        /* height: 100vh;
        overflow-y: scroll; */
    }

    @media(min-width: 763px) {
        position: fixed;
        height: 100%;
        overflow-y: scroll;
        z-index: 3;
        top: 0;
    }
`

export const Fieldset = styled.div`

    width: 75.3%;
    margin: 0 auto;

    span {
        display: flex;
        justify-content: space-between;
    }

    span:not(span:last-child) .input-field:first-child{
        width: 30%;
    }

    span:not(span:last-child) .input-field:last-child{
        width: 58%;
    }

    span:last-child .input-field:first-child{
        width: 64%;
    }

    span:last-child .input-field:last-child{
        width: 23%;
    }


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