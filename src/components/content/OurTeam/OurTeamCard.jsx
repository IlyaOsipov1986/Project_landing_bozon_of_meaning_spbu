// eslint-disable-next-line no-unused-vars
import { animated, useSpring } from "react-spring";
import  './OurTeam.scss';
import useHover from "../../../utils/hooks/useHover.js";
import useMobile from "../../../utils/hooks/useMobile.js";

const OurTeamCard = ({item}) => {

    const isMobile = useMobile('1000px');
    const [hoverRef, isHovered] = useHover();
    const springStyle = useSpring({
        visibility: isHovered ? 1 : 0,
        config: { duration: 500 },
    });

    return (
        <div className="our-team__team-item">
            <div className="our-team__team-img">
                <img src={item.image} alt="" />
            </div>
            <div className="our-team__team-info" ref={hoverRef}>
                <div className="our-team__team-info-name">
                    <h5><i style={{ fontWeight: 100 }}>{item.name} </i>{item.secondName}</h5>
                    <span>{item.jobTitle}</span>
                </div>
                {!isHovered && !isMobile ? (
                    <p className="our-team__team-info-bio-with-gradient">{item.bio}</p>
                ) : (
                    <animated.div
                        className="our-team__animated-wrap"
                        style={springStyle}
                    >
                        <p className="our-team__team-info-bio">{item.bio}</p>
                    </animated.div>
                )}
                {isMobile && (
                    <p className="our-team__team-info-bio__mobile">{item.bio}</p>
                )}
            </div>
        </div>
    )
}

export default OurTeamCard;