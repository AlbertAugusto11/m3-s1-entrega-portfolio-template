export const TechCard = ({lista}) => {
    return(
        <li>
            <h3>{lista.name}</h3>
            <img src={lista.img} alt={lista.name} />
        </li>
    )
}
export default TechCard