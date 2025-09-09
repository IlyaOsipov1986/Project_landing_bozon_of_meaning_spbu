import "./Stories.scss";
import VKVideoCarousel from "../../ui/VKVideoCarousel/VKVideoCarousel";
import Container from "../../layout/Container/Container";

const Stories = () => {

    return (
        <section id='stories' className="stories">
            <Container>
                <div className="stories__container">
                    <div className="stories__title">
                      <h1>Истории</h1>
                      <p>Небольшое описание блока</p>  
                    </div>
                    <VKVideoCarousel />
                </div>
            </Container>
        </section>
    )
}

export default Stories;