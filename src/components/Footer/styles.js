import styled from 'styled-components'

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    background-color: #DDCA7D;
`

export const FooterContent = styled.div`
    
    display: flex;
    justify-content: space-between;

    button {
        width: 200px;
        height: 50px;
        align-self: center;
        backgroud-color: #B88B4A;
    }

    ul {
        list-style: none;

        li {
            &:first-child {
                font-size: 1.563rem;
                margin-bottom: 1.25rem;
            }

            &:not(li:first-child, li:last-child) {
                font-size: 0.875rem;
                margin-bottom: 0.563rem;
            }
        }
    }

    .divBar{
        width: 4px;
        margin: 0 1rem;
        background-color: black;
        border: 1px solid black;
    }

    @media (max-width: 1024px){
        flex-direction: column;
        align-items: center;

        width: 100%;
        text-align: center;

        ul:last-child {
            margin-bottom: 1.875rem;
        }

        button {
            margin-top: 1.875rem;
        }

        .divBar {
            width: 70%;
            margin: 1.875rem 0;
        }
    }
`
