import React from "react";
import "./Index.css";
import { HeroImg } from "../../components/HeroImg";
import Galeria1 from "../../assets/img/galeria1.jpg";
import Galeria2 from "../../assets/img/galeria2.jpg";
import Galeria3 from "../../assets/img/galeria3.jpg"
import Galeria4 from "../../assets/img/galeria4.jpg";
import Galeria5 from "../../assets/img/galeria5.jpg";
import Galeria6 from "../../assets/img/galeria6.jpg";
import Galeria7 from "../../assets/img/quarto1.jpg";
import Galeria8 from "../../assets/img/quarto2.jpg";
import Galeria9 from "../../assets/img/quarto3.jpg";

const Galeria = () => {
    return (
        <>
            <HeroImg><h1>GALERIA</h1></HeroImg>
            <main>
                <ul className="containerGaleria">
                    <li>
                        <div className="foto">
                            {<img src={Galeria1}/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria4}/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria6}/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria2}/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria5}/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria3}/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria7}/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria8}/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria9}/>}
                        </div>
                    </li>
                </ul>
            </main>
        </>
    )
}

export default Galeria