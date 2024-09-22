export const ProjectCard = ({lista}) => {    
    return(
        <li>
            <h3>{lista.name}</h3>
            <p>Linguagem: <span>Javascript</span></p>
            <p>Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...</p>
            <p>{lista.description}</p>
            <div>
                <img src={lista.img} alt="git-icon"/>
                <p>Github Code</p>
                <img src={lista.img2} alt="share"/>
                <p>Aplicação</p>
            </div>
        </li>
    )
}
export default ProjectCard