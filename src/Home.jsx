import AboutMeSection from "./Componentes/AboutMeSection"
import BannerSection from "./Componentes/BannerSection"
import { Footer } from "./Componentes/Footer"
import Header from "./Componentes/Header"
import ProjectsSection from "./Componentes/ProjectsSection"
import TechSection from "./Componentes/TechSection"

export const Home = () => {
    return(
        <>
            <Header/>
            <AboutMeSection />
            <BannerSection />
            <ProjectsSection />
            <TechSection />
            <Footer />
        </>

    )
}
export default Home