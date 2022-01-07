import Footer from "../Footer/Index"
import Header from "../Header/Index"

function Layout ({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout