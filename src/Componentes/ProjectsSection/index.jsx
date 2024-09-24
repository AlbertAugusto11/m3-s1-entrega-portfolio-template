import { projects } from "../../data/projects"
import ProjectCard from "./ProjectCard"
import "./index.css"

export const ProjectsSection = () =>{
    return(
        <section id="project" className="projectSection">
            <h3>My projects</h3>
            <p className="section__p">Projects created at <span>Kenzie Academy</span></p>
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