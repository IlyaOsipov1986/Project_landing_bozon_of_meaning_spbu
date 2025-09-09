import "./AboutProject.scss";
import Container from "../../layout/Container/Container";
import linkButton from "../../../assets/img/icons/linkButton.svg";
import { AboutProjectDataCards } from "../../../config";

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
                            <img src={AboutProjectDataCards[0]?.icon} alt=""/>
                        </div>
                        <h5 className="about-project__card_title">{AboutProjectDataCards[0]?.title}</h5>
                        <p className="about-project__card_desc">{AboutProjectDataCards[0]?.desc}</p>
                    </div>
                    <div className="about-project__card_2">
                        <div className="about-project__card_icon">
                           <img src={AboutProjectDataCards[1]?.icon} alt=""/> 
                        </div>
                        <h5 className="about-project__card_title">{AboutProjectDataCards[1]?.title}</h5>
                        <p className="about-project__card_desc">{AboutProjectDataCards[1]?.desc}</p>
                        <div className="about-project__card_bg-image"/>
                    </div>
                    <div className="about-project__card_3">
                        <div className="about-project__card_icon">
                            <img src={AboutProjectDataCards[2]?.icon} alt=""/>
                        </div>
                        <p className="about-project__card_desc">{AboutProjectDataCards[2]?.desc}</p>
                        <div>
                            <img className="about-project__card_link_btn" src={linkButton} alt=""/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default AboutProject;