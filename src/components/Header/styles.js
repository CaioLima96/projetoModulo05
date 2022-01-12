import styled from 'styled-components'

export const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: flex-end;

    background-color: var(--brown6);

    #navMenu {
        display: flex;
        justify-content: space-between;
        width: 100%;

        div:first-child {
            display: none;
        }
    }

    a:hover {
        color: white;
    }

    .logoImg {
        height: 55px;
        margin-left: 0.625rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    @media (max-width: 850px) {
        display: initial;
        z-index: 1;

        #navMenu {
            display: initial;
        }

        .hideShowBtn {
            display: block !important;
        }

        .logoImg {
            display: none;
        }

        #navMenu div:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 0.5rem 1rem;

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
            color: black;
        }
    }

    @media (max-width: 850px) {
        display: none;

        margin: 0;
        background-color: #333333 !important;
        padding: 0.625rem 1rem;

        li {
            margin: 0 0 0.688rem 0;
        }
    }
`