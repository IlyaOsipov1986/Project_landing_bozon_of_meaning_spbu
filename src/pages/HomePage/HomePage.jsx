import Slider from "../../components/ui/Slider/Slider";
import AboutProject from "../../components/content/AboutProject/AboutProject";
import Filming from "../../components/content/Filming/Filming";

const HomePage = () => {

    return (
        <main className="main main-overflow-hidden">
           <Slider/>
           <AboutProject/>
           <Filming/>
        </main>
    )
}
export default HomePage;