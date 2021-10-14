import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Summary from "../components/Summary";
import Projects from "../components/Projects";
import Contact from "../components/Contact";



export default function Home() {
    return (
        <div>
            <Navigation/>
            <Main/>
            <Summary/>
            <Projects/>
            <Contact/>
        </div>
    )
}