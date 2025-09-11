import "./Header.scss";
import Nav from "./Nav";
import MobileMenu from "../../../components/layout/Header/MobileMenu/MobileMenu";
import BurgerButton from "./MobileMenu/BurgerButton.jsx";
import logoBozon from "../../../assets/img/icons/headerIcon.svg";
import useMobile from "../../../utils/hooks/useMobile.js";
import useClickOutside from "../../../utils/hooks/useClickOutside.js";
import {scrollToElement} from "../../../utils/utils.js";

const Header = () => {

  const {
      ref: menuRef,
      isOpened: mobileMenuShown,
      setIsOpened: setMobileMenuShown,
  } = useClickOutside();

  const isMobile = useMobile('1000px');

  return (
    <header className="header">
      <div className="header-container">
        {isMobile && <img className="header__logo" src={logoBozon} alt="Бозон смысла" />}
        <div className="header__block">
          <div style={{display: 'flex'}}>
           <img className="header__logo" src={logoBozon} alt="Бозон смысла" />
          </div>
          <Nav onHandleClick={scrollToElement}/>
        </div>
        {isMobile &&
          <BurgerButton
              mobileMenuShown={mobileMenuShown}
              setMobileMenuShown={setMobileMenuShown}
          />
        }
      </div>
      {isMobile &&
        <MobileMenu
            menuRef={menuRef}
            mobileMenuShown={mobileMenuShown}
            setMobileMenuShown={setMobileMenuShown}
        />
      }
    </header>
  );
};
export default Header;
