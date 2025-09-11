import  "./OurTeam.scss";
import React from "react";
import Container from "../../layout/Container/Container.jsx";
import { teamData } from "../../../config.js";
import OurTeamCard from "./OurTeamCard.jsx";

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
                              <React.Fragment key={item.id}>
                                  <OurTeamCard
                                      item={item}
                                  />
                              </React.Fragment>
                          )})}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OurTeam;