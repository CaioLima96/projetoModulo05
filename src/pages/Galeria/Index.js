import React from "react";
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
import {ContainerGaleria} from "./styles.js"

const Galeria = () => {
    return (
        <>
            <HeroImg><h1>GALERIA</h1></HeroImg>
            <main>
                <ContainerGaleria>
                    <li>
                        <div className="foto">
                            {<img src={Galeria1} alt="Piscina e parede do hotel" />}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria4} alt="Restaurante do hotel" />}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria6} alt="mesa de restaurante japonês" />}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria2} alt="bar do hotel" />}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria5}/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria3} alt="quarto do hotel"/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria7} alt="varanda do hotel com bista para a praia"/>}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria8}  alt="quarto do hotel" />}
                        </div>
                    </li>
                    <li>
                        <div className="foto">
                            {<img src={Galeria9}  alt="quarto do hotel" />}
                        </div>
                    </li>
                </ContainerGaleria>
            </main>
        </>
    )
}

export default Galeria