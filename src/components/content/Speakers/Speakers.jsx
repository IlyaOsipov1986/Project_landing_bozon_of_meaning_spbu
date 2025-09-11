import "./Speakers.scss";
import Container from "../../layout/Container/Container";
import { speakersData } from "../../../config";
import { useState } from "react";
import speakersBgImage from "../../../assets/img/speakersBgImage.png";

const Speakers = () => {

    const [descSpeaker, setDescSpeaker] = useState({
        isActive: speakersData[0].id,
        name: speakersData[0].name,
        job: speakersData[0].jobTitle,
        desc: speakersData[0].bio
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
                        <div className="speakers__images__bg-wrap">
                            {speakersData.map((card) => {
                            return(
                                <div onClick={() => onHandleSelectSpeakers(card)} key={card.id} className={`${descSpeaker.isActive === card.id ? "speakers__circle-image active" : 'speakers__circle-image'} ${card.addClass}`}>
                                    <img src={card.image} alt='speaker'/>
                                </div>
                            )
                            })}
                            <img className="speakers__images-bg" src={speakersBgImage} alt=""/>    
                        </div> 
                    </div>
                    <div className="speakers__desc-speaker">
                        <div className="speakers__desc-speaker__name">
                            <h5>{descSpeaker.name}</h5>
                            <span>{descSpeaker.job}</span>
                        </div>
                        <p>{descSpeaker.desc}</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Speakers;