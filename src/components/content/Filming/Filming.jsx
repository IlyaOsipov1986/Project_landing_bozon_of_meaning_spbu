// eslint-disable-next-line no-unused-vars
import { animated, useSpring } from "react-spring";
import "./Filming.scss";
import React, { useState } from "react";
import Container from "../../../components/layout/Container/Container";
import RowLeftRightButtons from "../../ui/RowLeftRightButtons/RowLeftRightButtons";
import filmingImage_01 from "../../../assets/img/filmingImage_01.png";
import filmingImage_02 from "../../../assets/img/filmingImage_02.png";
import useCardsCarousel from "../../../utils/hooks/useCardsCarousel";
import CardsTransition from "../../layout/CardsTransition/CardsTransition";
import { filmingData } from "../../../config";
import { findFirstElemLastElemForShowArrow } from "../../../utils/utils";

const Filming = () => {

    const [direction, setDirection] = useState(1);
    const { visibleCards, nextGroup, prevGroup } = useCardsCarousel(filmingData, 1);
    const setNotActiveArrow = findFirstElemLastElemForShowArrow(filmingData, visibleCards);

    const springStyle = useSpring({
        from: { 
            opacity: 0,
            transform: 'translateY(30px) scale(0.95)'
        },
        to: { 
            opacity: 1,
            transform: 'translateY(0px) scale(1)'
        },
        config: { duration: 500 },
        reset: true, // Сбрасывает анимацию при каждом изменении
        key: direction
    });

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
                        </div>
                        {visibleCards.map((el) => {
                            return (
                                <React.Fragment key={el.id}>
                                    <div className="filming__main-desc">
                                        <animated.div style={springStyle}>
                                            <p>{el.desc}</p>
                                        </animated.div>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                        <div className="filming__main-title">
                            <div className="filming__main-title-item-without-img">
                                <h1 style={{fontWeight: '400'}}>Съемки в</h1>
                            </div>
                            <div className="filming__main-title-item">
                                <h1 style={{fontWeight: '200', fontStyle: 'italic', letterSpacing: '-3px'}}>особняке</h1>
                                <img src={filmingImage_01} alt="image"/>
                            </div>
                            <div className="filming__main-title-item">
                                <img src={filmingImage_02} alt="image"/>
                                <h1 style={{fontWeight: '400'}}>Кельха</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="filming__container-background"/>
        </section>
    )
}

export default Filming;