import burgerMenuWhite from "../../../../assets/img/icons/burgerMenuWhite.svg";
import "./MobileMenu.scss";

const BurgerButton = ({setMobileMenuShown}) => {


    return (
        <button type="button" className="burger" onClick={() => setMobileMenuShown(true)}>
            <img src={burgerMenuWhite} alt="Burger"/>
        </button>
    );
};

export default BurgerButton;