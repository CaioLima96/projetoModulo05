import React from "react";

class Header extends React.Component {
    render(){

        return (

            <header>

                <nav id="navMenu">

                    <ul>
                        <li><a href="/">Drinks</a></li>
                        <li><a href="/">Sobre Nós</a></li>
                        <li><a href="/">Bons Drinks</a></li>
                        <li><a href="/">Nosso Time</a></li>
                        <li></li>
                    </ul>

                </nav>

            </header>
        )
    }
}

export default Header