import { projects } from "../../data/projects"
import ProjectCard from "./ProjectCard"

export const ProjectsSection = () =>{
    return(
        <section>
            <ul>
                {projects.map(element =>{
                    return(
                        <ProjectCard lista ={element} key={element.name} />
                    )
                })}
            </ul>
        </section>
    )
}
export default ProjectsSection