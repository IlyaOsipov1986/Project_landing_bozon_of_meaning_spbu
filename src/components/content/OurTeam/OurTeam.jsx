import  "./OurTeam.scss";
import Container from "../../layout/Container/Container.jsx";
import { teamData } from "../../../config.js";

const OurTeam = () => {

    return (
        <section id="our-team" className="our-team">
            <Container size="large-m">
                <div className="our-team__container">
                    <div className="our-team__title">
                        <h1>Наша <i style={{ fontWeight: 100, color: 'white' }}>команда</i></h1>
                    </div>
                    <div className="our-team__team">
                        {teamData.map((item) => {
                          return (
                              <div key={item.id} className="our-team__team-item">
                                <div className="our-team__team-img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="our-team__team-info">
                                    <div className="our-team__team-info-name">
                                        <h5><i style={{ fontWeight: 100 }}>{item.name} </i>{item.secondName}</h5>
                                        <span>{item.jobTitle}</span>
                                    </div>
                                    <p>{item.bio}</p>
                                </div>
                              </div>
                          )})}
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default OurTeam;