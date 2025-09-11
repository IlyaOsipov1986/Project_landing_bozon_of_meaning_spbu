import Slider from "../../components/ui/Slider/Slider";
import AboutProject from "../../components/content/AboutProject/AboutProject";
import Filming from "../../components/content/Filming/Filming";
import Stories from "../../components/content/Stories/Stories";
import Speakers from "../../components/content/Speakers/Speakers";
import OurTeam from "../../components/content/OurTeam/OurTeam.jsx";

const HomePage = () => {

    return (
        <main className="main main-overflow-hidden">
           <Slider/>
           <AboutProject/>
           <Filming/>
           <Stories/>
           <Speakers/>
           <OurTeam/>
        </main>
    )
}
export default HomePage;