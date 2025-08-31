// eslint-disable-next-line no-unused-vars
import { animated, useTransition } from 'react-spring';
import {useLocation} from "react-router-dom";

const PageTransition = ({ children }) => {

    const { pathname } = useLocation();
    const currentNavLink = pathname === '/' ? 'home' : pathname.replace('/', '');
    const transitions = useTransition(pathname, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        // config: { mass: 5, tension: 300, friction: 30 }
        config: {duration: 300}
    });

    return transitions((style) => (
        <animated.div className={`${currentNavLink}_page-transition`} style={style}>
            {children}
        </animated.div>
        )
    )
}

export default PageTransition;