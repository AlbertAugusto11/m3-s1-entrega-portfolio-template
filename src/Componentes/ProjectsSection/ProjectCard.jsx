export const ProjectCard = ({lista}) => {
    return(
        <li>
            <h3>{lista.name}</h3> <span>New</span>
            <p>{lista.description}</p>
        </li>
    )
}
export default ProjectCard