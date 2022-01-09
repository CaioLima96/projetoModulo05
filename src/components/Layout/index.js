import Footer from "../Footer/Index"
import Header from "../Header/Index"
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