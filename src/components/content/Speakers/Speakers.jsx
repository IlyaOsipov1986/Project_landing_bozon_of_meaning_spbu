// eslint-disable-next-line no-unused-vars
import { animated, useSpring } from "react-spring";
import Container from "../../layout/Container/Container";
import "./Speakers.scss";
import { speakersData } from "../../../config";
import React, { useState } from "react";
import SpeakersCard from "./SpeakersCard";
import speakersBgImage from "../../../assets/img/speakersBgImage.png";

const Speakers = () => {

    const [descSpeaker, setDescSpeaker] = useState({
        isActive: speakersData[0].id,
        name: speakersData[0].name,
        job: speakersData[0].jobTitle,
        desc: speakersData[0].bio
    });
 
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
        key: descSpeaker.isActive
    });

    const onHandleSelectSpeakers = (item) => {
        setDescSpeaker({
            isActive: item.id,
            name: item.name,
            job: item.jobTitle,
            desc: item.bio
        })
    }

    return (
        <section id="speakers" className="speakers">
            <Container>
                <div className="speakers__container">
                    <div className="speakers__images-wrap">
                        <h1>Спикеры</h1>
                        <div className="speakers__images__bg-wrap">
                            {speakersData.map((card) => {
                                return(
                                        <React.Fragment key={card.id}>
                                            <SpeakersCard
                                                card={card}
                                                descSpeaker={descSpeaker}
                                                onHandleSelectSpeakers={() => onHandleSelectSpeakers(card)}
                                            />
                                        </React.Fragment>
                                    )
                                })}
                            <img className="speakers__images-bg" src={speakersBgImage} alt=""/>    
                        </div> 
                    </div>
                    {descSpeaker.isActive && <animated.div style={springStyle}>
                        <div className="speakers__desc-speaker">
                            <div className="speakers__desc-speaker__name">
                                <h5>{descSpeaker.name}</h5>
                                <span>{descSpeaker.job}</span>
                            </div>
                            <p>{descSpeaker.desc}</p>
                        </div>
                    </animated.div>}
                </div>
            </Container>
        </section>
    )
}

export default Speakers;