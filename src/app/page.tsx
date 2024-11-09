import Hero from "@/components/layout/HeroSection";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Education from "@/app/education/page"
import Services from "@/app/services/page"
import Contact from "@/app/contact/page"

export default function Home(){
    return(
        <div>
            <Hero/>
            <About/>
            <Skills/>
            <Education/>
            <Services/>
            <Contact/>
        </div>
    )
}