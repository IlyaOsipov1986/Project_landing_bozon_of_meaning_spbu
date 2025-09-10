import "./Speakers.scss";
import Container from "../../layout/Container/Container";
import { speakersData } from "../../../config";
import { useState } from "react";
import speakersBgImage from "../../../assets/img/speakersBgImage.png";

const Speakers = () => {

    const [descSpeaker, setDescSpeaker] = useState({
        name: speakersData[0].name,
        job: speakersData[0].jobTitle,
        desc: speakersData[0].bio
    });

    return (
        <section id="speakers" className="speakers">
            <Container>
                <div className="speakers__container">
                    <div className="speakers__images-wrap">
                        <div className="speakers__images__bg-wrap">
                            {speakersData.map((card) => {
                            return(
                                <div key={card.id} class={`speakers__circle-image ${card.addClass}`}>
                                    <img src={card.image} alt='speaker'/>
                                </div>
                            )
                            })}
                            <img className="speakers__images-bg" src={speakersBgImage} alt=""/>    
                        </div> 
                    </div>
                    <div className="speakers__desc-speaker">
                        <div className="speakers__desc-speaker__name">
                            <h5>Константин Амелин</h5>
                            <span>Кандидат физико-математических наук, Директор Центр искусственного интеллекта СПбГУ</span>
                        </div>
                        <p>Директор Центра ИИ СПбГУ, ученый и инженер в области робототехники, искусственного интеллекта и мультиагентных систем с 15-летним опытом научной и практической деятельности. Автор 6 зарегистрированных патентов и многочисленных публикаций в ведущих международных журналах, участник престижных международных коллабораций с NTNU (Норвегия) и HUST (Китай). Обладает глубокой экспертизой в разработке систем управления для беспилотных летательных аппаратов (БПЛА), подводных робототехнических комплексов и распределенных вычислительных систем. Разработанные алгоритмы управления группами роботов в условиях неопределенности успешно применяются в логистике, мониторинге промышленных объектов и исследовании труднодоступных территорий. Совмещает научную работу с преподаванием курсов по робототехнике, искусственному интеллекту и мультиагентным технологиям в СПбГУ.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Speakers;