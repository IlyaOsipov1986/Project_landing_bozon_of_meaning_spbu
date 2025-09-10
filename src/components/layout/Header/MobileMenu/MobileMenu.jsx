import "./MobileMenu.scss";
import classNames from "classnames";
import Nav from "../Nav.jsx";
import closeIcon from "../../../../assets/img/icons/closeIconWhiteBtn.svg";
import logotypeIIcentreMobile from "../../../../assets/img/icons/headerIcon.svg";
import {Link} from "react-router-dom";

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
                <Link to='/' onClick={() => setMobileMenuShown(false)}>
                    <img className="mobile-menu__header-logo" src={logotypeIIcentreMobile} alt="БОЗОН СМЫСЛА"/>
                </Link>
                <img onClick={() => setMobileMenuShown(false)} className='mobile-menu__header-close-btn' src={closeIcon} alt=""/>
            </div>
            <Nav
                isMobileActive={true}
                onHandleClick={() => setMobileMenuShown(false)}
            />
        </section>
    )
}

export default MobileMenu;