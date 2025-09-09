import "./Filming.scss";
import React, { useState } from "react";
import Container from "../../../components/layout/Container/Container";
import RowLeftRightButtons from "../../ui/RowLeftRightButtons/RowLeftRightButtons";
import filmingImage_01 from "../../../assets/img/filmingImage_01.png";
import filmingImage_02 from "../../../assets/img/filmingImage_02.png";
import useCardsCarousel from "../../../utils/hooks/useCardsCarousel";
import CardsTransition from "../../layout/CardsTransition/CardsTransition";
import { filmingDataImages } from "../../../config";
import { findFirstElemLastElemForShowArrow } from "../../../utils/utils";

const Filming = () => {

    const [direction, setDirection] = useState(1);
    const { visibleCards, nextGroup, prevGroup } = useCardsCarousel(filmingDataImages, 1);
    const setNotActiveArrow = findFirstElemLastElemForShowArrow(filmingDataImages, visibleCards);

    const onHandleToggleArrowNext = () => {
        setDirection(1);
        nextGroup();
    }

    const onHandleToggleArrowPrev = () => {
        setDirection(-1);
        prevGroup();
    }

    return (
        <section id="filming" className="filming">
            <Container size='large'>
                <div className="filming__container">
                    <div className="filming__slider-background">
                        <div className="filming__slider-background__svg"/>
                        <div className="filming__slider-content">
                            {visibleCards.map((el) => {
                                return (
                                    <React.Fragment key={el.id}>
                                        <CardsTransition
                                            direction={direction}
                                        >
                                            <img src={el.image} alt="image"/>
                                        </CardsTransition>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <div className="filming__main">
                        <div className="filming__main-title-wrap">
                            <RowLeftRightButtons
                                nextGroup={onHandleToggleArrowNext}
                                prevGroup={onHandleToggleArrowPrev}
                                isNotActiveArrow={setNotActiveArrow}
                            />
                            <div className="filming__main-title">
                                <div className="filming__main-title-item-without-img">
                                    <h1 style={{fontWeight: '500'}}>Съемки в</h1>
                                </div>
                                <div className="filming__main-title-item">
                                    <h1 style={{fontWeight: '200', fontStyle: 'italic', letterSpacing: '-3px'}}>особняке</h1>
                                    <img src={filmingImage_01} alt="image"/>
                                </div>
                                <div className="filming__main-title-item">
                                    <img src={filmingImage_02} alt="image"/>
                                    <h1 style={{fontWeight: '500'}}>Кельха</h1>
                                </div>
                            </div>
                        </div>
                        <div className="filming__main-desc">
                            <p>«Сделайте нечто... разнообразное, чтобы при одном только взгляде на здание дух захватывало» – с этих слов началась история особняка А.Ф. Кельха. Их произнесла Варвара Петровна Кельх (в девичестве Базанова) – представительница семьи сибирских золотопромышленников, владелица Ленских золотых приисков и Ленско-Витимского пароходства. В 1895 году она вместе с мужем Александром Фердинандовичем купила тот самый дом номер 28 на улице Чайковского. Только выглядел он тогда иначе, а экспрессивная фраза новой хозяйки стала заданием для архитекторов.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="filming__container-background"/>
        </section>
    )
}

export default Filming;