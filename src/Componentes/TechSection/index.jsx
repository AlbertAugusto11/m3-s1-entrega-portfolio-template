import { technologies } from "../../data/technologies"
import TechCard from "./TechCard"
import "./index.css"

export const TechSection = () => {
    return(
        <section className="tech__section">
            <div className="section__div">
               <h2>Let's set up a conversation and <span>develop our creativity</span> together?</h2> 
                <p>Advertise your brand organically within Dribbble’s design inspiration feed.</p>
            </div>

            <ul className="section__ul">
                {technologies.map(element =>{
                    return(
                        <TechCard lista={element} key={element.name} />
                    )
                })}
            </ul>
        </section>
    )
}
export default TechSection