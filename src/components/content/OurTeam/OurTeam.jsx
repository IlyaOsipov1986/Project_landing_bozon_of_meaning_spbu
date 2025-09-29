import  "./OurTeam.scss";
import React, { useState } from "react";
import Container from "../../layout/Container/Container.jsx";
import { teamData } from "../../../config.js";
import OurTeamCard from "./OurTeamCard.jsx";
import RowLeftRightButtons from "../../ui/RowLeftRightButtons/RowLeftRightButtons";
import { findFirstElemLastElemForShowArrow } from "../../../utils/utils";
import useCardsCarousel from "../../../utils/hooks/useCardsCarousel";
import CardsTransition from "../../layout/CardsTransition/CardsTransition";
import useMobile from "../../../utils/hooks/useMobile.js";

const OurTeam = () => {

    const [direction, setDirection] = useState(1);
    const isMobile = useMobile('1000px');
    const { visibleCards, nextGroup, prevGroup } = useCardsCarousel(teamData, isMobile ? 5 : 4);
    const setNotActiveArrow = findFirstElemLastElemForShowArrow(teamData, visibleCards);

    const onHandleToggleArrowNext = () => {
        setDirection(1);
        nextGroup();
    }

    const onHandleToggleArrowPrev = () => {
        setDirection(-1);
        prevGroup();
    }

    return (
        <section id="our-team" className="our-team">
            <Container size="large-m">
                <div className="our-team__container">
                    <div className="our-team__title">
                        {!isMobile && <RowLeftRightButtons
                            nextGroup={onHandleToggleArrowNext}
                            prevGroup={onHandleToggleArrowPrev}
                            isNotActiveArrow={setNotActiveArrow}
                        />}
                        <h1>Наша <i style={{ fontWeight: 100, color: 'white' }}>команда</i></h1>
                    </div>
                    <div className="our-team__team">
                        {visibleCards.map((item) => {
                          return (
                              <React.Fragment key={item.id}>
                                <CardsTransition addStyle={{display: 'grid', width: '100%'}} direction={direction}>
                                    <OurTeamCard
                                      item={item}
                                    />
                                </CardsTransition>
                              </React.Fragment>
                          )})}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OurTeam;