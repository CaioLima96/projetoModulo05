import styled from 'styled-components'

export const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: flex-end;

    background-color: gray;

    #navMenu > div {
        display: none;
    }


    @media (max-width: 600px) {
        display: initial;
        z-index: 1;

        .hideShowBtn {
            display: block !important;
        }

        #navMenu > div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 1rem;

            a {
                text-decoration: none;
                font-size: 1.25rem;
                color: black;
            }
        }
    }

`

export const NavBarLista = styled.ul`

    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;

    list-style: none;
    padding: 0;

    li {
        margin-right: 1.438rem;

        a {
            text-decoration: none;
            color: white;
        }
    }

    @media (max-width: 600px) {
        display: none;

        margin: 0;
        background-color: #333333 !important;
        padding: 0.625rem 1rem;

        li {
            margin: 0 0 0.688rem 0;
        }
    }
`