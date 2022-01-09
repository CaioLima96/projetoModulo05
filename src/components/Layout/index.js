import Footer from "../Footer/Index"
import Header from "../Header/Index"
import Reservar from "../Reservar"

function Layout ({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
            <Reservar/>
        </>
    )
}

export default Layout