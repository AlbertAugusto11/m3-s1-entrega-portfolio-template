import perfil from "./perfil.png"
import giticon from "./git-icon.png"
import htmlicon from "./html-icon.png"
import cssicon from "./css-icon.png"
import jsicon from "./js-icon.png"
import nodeicon from "./node.png"
import reacticon from "./react-icon.png"
import "./index.css"
import BannerSection from "../BannerSection/index.jsx"


export const AboutMeSection = () => {
    return(
        <section className="aboutSection">
            <div className="section__div1">
                <div className="div1__div1">
                    <img src={perfil} alt="PERFIL"/>
                    <p>Hello, may name is Anna</p>
                </div>
                <h1>I <span>love</span> creating and <span>developing</span> projects</h1>
                <p>Discover here in this environment, created especially for you, all my projects and technologies</p>
                <div className="div1__div2">
                    <button>See Projects</button>
                    <img src={giticon} alt="git-icon"/>
                </div>
                <div className="div1__div3">
                    <img src={htmlicon} alt="html-icon" />
                    <img src={cssicon} alt="css-icon" />
                    <img src={jsicon} alt="js-icon" />
                    <img src={nodeicon} alt="node-icon" />
                    <img src={reacticon} alt="react-icon" />
                </div>
            </div>
            <div className="section__div2">
                <BannerSection />
            </div>
        </section>
    )
}
export default AboutMeSection