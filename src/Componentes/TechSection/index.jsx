import { technologies } from "../../data/technologies"
import TechCard from "./TechCard"

export const TechSection = () => {
    return(
        <section>
            <ul>
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