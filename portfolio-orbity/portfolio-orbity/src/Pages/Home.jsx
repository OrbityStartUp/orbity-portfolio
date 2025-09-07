import { Header } from "../Components/Header/Header";
import { Hero } from "../Components/Hero/Hero";
import { AboutUs } from '../Components/AboutUs/AboutUs';
import { MissionVisionValues } from '../Components/MissionVisionValues/MissionVisionValues';
import { Team } from '../Components/Team/Team';
import { Contact } from '../Components/Contact/Contact';
import { Footer } from '../Components/Footer/Footer';

export function Home() {
    return (
        <>
            <Header />
            <Hero />
            <AboutUs />
            <MissionVisionValues />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}