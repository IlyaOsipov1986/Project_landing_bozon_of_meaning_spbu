// eslint-disable-next-line no-unused-vars
import {animated, config, useSpring} from 'react-spring';

const CardsTransition = ({ children, addStyle={}, resetAnimation = true, direction = 1 }) => {

    const props = useSpring({
        transform: 'translateX(0%)',
        from: {
            transform: `translateX(${direction > 0 ? '100%' : '-100%'})`,
        },
        config: config.slow,
        reset: resetAnimation, // Сбрасывает анимацию при изменении,
    });
    
    return <animated.div style={{...props, ...addStyle}}>{children}</animated.div>
}

export default CardsTransition;