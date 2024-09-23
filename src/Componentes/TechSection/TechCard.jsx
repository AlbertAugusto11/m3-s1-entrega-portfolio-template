export const TechCard = ({lista}) => {
    return(
        <li>
            <div className="li__div1"><img src={lista.img} alt={lista.name} /></div>
            <div className="li__div2">
                <h3>{lista.name}</h3>
                <p>{lista.text1}</p>
                <span>{lista.text2}</span>
            </div>
        </li>
    )
}
export default TechCard