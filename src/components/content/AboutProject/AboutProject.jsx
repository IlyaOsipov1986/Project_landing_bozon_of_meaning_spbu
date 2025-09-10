import "./AboutProject.scss";
import Container from "../../layout/Container/Container";
import { aboutProjectDataCards } from "../../../config";

const AboutProject = () => {

    return (
        <section id="about-project" className="about-project">
            <Container>
                <div className="about-project__container">
                    <h1 className="about-project__title">О Проекте</h1>
                </div>
                <div className="about-project__card-block">
                    <div className="about-project__card_1">
                        <div className="about-project__card_icon">
                            <img src={aboutProjectDataCards[0]?.icon} alt=""/>
                        </div>
                        <h5 className="about-project__card_title">{aboutProjectDataCards[0]?.title}</h5>
                        <p className="about-project__card_desc">{aboutProjectDataCards[0]?.desc}</p>
                    </div>
                    <div className="about-project__card_2">
                        <div className="about-project__card_icon">
                           <img src={aboutProjectDataCards[1]?.icon} alt=""/> 
                        </div>
                        <h5 className="about-project__card_title">{aboutProjectDataCards[1]?.title}</h5>
                        <p className="about-project__card_desc">{aboutProjectDataCards[1]?.desc}</p>
                        <div className="about-project__card_bg-image"/>
                    </div>
                    <div className="about-project__card_3">
                        <div className="about-project__card_icon">
                            <img src={aboutProjectDataCards[2]?.icon} alt=""/>
                        </div>
                        <p className="about-project__card_desc">{aboutProjectDataCards[2]?.desc}</p>
                        <a className="about-project__card_link_btn" href="https://vk.com/v_nauke" target="_blank" rel="noopener noreferrer"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default AboutProject;