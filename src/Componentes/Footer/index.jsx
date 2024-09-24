import perfil from "./perfil.png"
import facebook from "./facebook.png"
import insta from "./insta.png"
import inico from "./in.png"
import "./index.css"

export const Footer = () => {
    return(
        <div id="midias" className="footer__Div">
            <img className="img__perfil" src={perfil} alt="perfil" />
            <div className="div1">
                <h4>Thank you!</h4>
                <p>Follow me on my social networks and let's talk</p>
            </div>
            <div className="div2">
                <img src={facebook} alt="facebook" />
                <img src={insta} alt="insta" />
                <img src={inico} alt="in" />
            </div>
        </div>
    )
}