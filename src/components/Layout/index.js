import React, {useState} from "react";
import Header from "../Header"
import Footer from "../Footer/index"
import CarrinhoCompra from "../CarrinhoCompras"

function Layout ({children}) {

    const [mostra, setMostra] = useState(false)

    function showReservaTab(){
        // let reservaTab = document.getElementsByClassName('hideReserva')
        // reservaTab.classList.toggle('showHideReserva')
        // console.log("reservatab")
        if(!mostra) {
            setMostra(true)
        } else {
            setMostra(false)
        }
        console.log(mostra)

        hideMenu()
    }

    function hideMenu() {
        let lista = document.getElementById("navBarLista")
        lista.classList.remove('hideShowBtn')
    }

    return (
        <>
            <Header mostraCarrinho={showReservaTab} />
            {children}
            <Footer/>
            <CarrinhoCompra mostra={mostra} mostraCarrinho={showReservaTab}/>
        </>
    )
}

export default Layout