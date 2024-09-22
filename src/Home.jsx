import AboutMeSection from "./Componentes/AboutMeSection"
import { Footer } from "./Componentes/Footer"
import Header from "./Componentes/Header"
import ProjectsSection from "./Componentes/ProjectsSection"
import TechSection from "./Componentes/TechSection"

export const Home = () => {
    return(
        <>
            <Header/>
            <AboutMeSection />
            <ProjectsSection />
            <TechSection />
            <Footer />
        </>

    )
}
export default Home