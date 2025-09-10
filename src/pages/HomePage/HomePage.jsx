import Slider from "../../components/ui/Slider/Slider";
import AboutProject from "../../components/content/AboutProject/AboutProject";
import Filming from "../../components/content/Filming/Filming";
import Stories from "../../components/content/Stories/Stories";

const HomePage = () => {

    return (
        <main className="main main-overflow-hidden">
           <Slider/>
           <AboutProject/>
           <Filming/>
           <Stories/>
        </main>
    )
}
export default HomePage;