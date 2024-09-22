import perfil from "./perfil.png"
import facebook from "./facebook.png"
import insta from "./insta.png"
import inico from "./in.png"
import "./index.css"

export const Footer = () => {
    return(
        <div className="footer__Div">
            <img className="img__perfil" src={perfil} alt="perfil" />
            <div>
                <h4>Thank you!</h4>
                <p>Follow me on my social networks and let's talk</p>
            </div>
            <img src={facebook} alt="facebook" />
            <img src={insta} alt="insta" />
            <img src={inico} alt="in" />
        </div>
    )
}