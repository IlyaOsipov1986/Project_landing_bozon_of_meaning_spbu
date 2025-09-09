import "./Filming.scss";
import Container from "../../../components/layout/Container/Container";
import RowLeftRightButtons from "../../ui/RowLeftRightButtons/RowLeftRightButtons";
import filmingSliderImage_01 from "../../../assets/img/filmingSliderImage_01.png"

const Filming = () => {

    return (
        <section id="filming" className="filming">
            <Container size='large'>
                <div className="filming__container">
                    <div className="filming__slider-background">
                        <div className="filming__slider-background__svg"/>
                        <div className="filming__slider-content">
                            <img src={filmingSliderImage_01} alt=""/>
                        </div>
                    </div>
                    <div className="filming__main">
                        <div className="filming__main-title">
                            <RowLeftRightButtons

                            />
                        </div>
                        <div className="filming__main-desc">
                            <p>«Сделайте нечто... разнообразное, чтобы при одном только взгляде на здание дух захватывало» – с этих слов началась история особняка А.Ф. Кельха. Их произнесла Варвара Петровна Кельх (в девичестве Базанова) – представительница семьи сибирских золотопромышленников, владелица Ленских золотых приисков и Ленско-Витимского пароходства. В 1895 году она вместе с мужем Александром Фердинандовичем купила тот самый дом номер 28 на улице Чайковского. Только выглядел он тогда иначе, а экспрессивная фраза новой хозяйки стала заданием для архитекторов.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default Filming;