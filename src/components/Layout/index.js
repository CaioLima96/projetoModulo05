import Header from "../Header/index"
import Footer from "../Footer/index"
import CarrinhoCompra from "../CarrinhoCompras"

function Layout ({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
            <CarrinhoCompra/>
        </>
    )
}

export default Layout