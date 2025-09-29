import "./MobileMenu.scss";
import classNames from "classnames";
import Nav from "../Nav.jsx";
import closeIcon from "../../../../assets/img/icons/closeIconWhiteBtn.svg";
import logotypeIconMobile from "../../../../assets/img/icons/headerIcon.svg";
import logotypeIconSpbuMobile from "../../../../assets/img/icons/headerSPBUIcon.svg";
import { Link } from "react-router-dom";
import {scrollToElement} from "../../../../utils/utils.js";

const MobileMenu = (props) => {

    const {
        menuRef,
        mobileMenuShown = false,
        setMobileMenuShown,
    } = props;

    const mobileMenuClasses = classNames({
        "mobile-menu": true,
        shown: mobileMenuShown,
    });

    return (
        <section className={mobileMenuClasses} ref={menuRef}>
            <div className="mobile-menu__header">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px', marginTop: '52px' }}>
                    <Link to='/' onClick={() => setMobileMenuShown(false)}>
                    <img className="mobile-menu__header-logo" src={logotypeIconMobile} alt="БОЗОН СМЫСЛА"/>
                </Link>
                <a href="https://spbu.ru/" target="_blank" rel="noreferrer noopener"><img src={logotypeIconSpbuMobile} alt="сайт СпбГУ"/></a>
                </div>
                <img onClick={() => setMobileMenuShown(false)} className='mobile-menu__header-close-btn' src={closeIcon} alt=""/>
            </div>
            <Nav
                isMobileActive={true}
                onHandleClick={(el) => {
                    setMobileMenuShown(false)
                    scrollToElement(el)
                }}
            />
        </section>
    )
}

export default MobileMenu;