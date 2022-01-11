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

    padding: 1.25rem;
    background-color: white;

    button {
        width: 100%;
        height: 55px;
        margin-bottom: 4.125rem;
    }

    form:not(form:last-child){
        margin-bottom: 5rem;
    }

    
    @media (max-width: 600px) {
        max-width: 800px;
        /* height: 100vh;
        overflow-y: scroll; */
    }
`

export const Form = styled.form`

    width: 75.3%;


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