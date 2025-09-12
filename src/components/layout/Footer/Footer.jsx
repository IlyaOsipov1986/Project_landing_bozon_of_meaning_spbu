import "./Footer.scss";
import { useMemo } from "react";
import footerLogo from "../../../assets/img/icons/footerLogo.svg";

const Footer = () => {

const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer-container">
      <div className="footer__mail">
        <p>По всем вопросам</p>
        <a href="mailto:v_nauke@mail.ru" target="_blank">v_nauke@mail.ru</a>
      </div>
      <div className="footer__links">
        <a href="https://vk.com/v_nauke" target="_blank" rel="noopener noreferrer">ВНауке</a>
        <a href="https://rutube.ru/search/?query=%D0%B1%D0%BE%D0%B7%D0%BE%D0%BD+%D1%81%D0%BC%D1%8B%D1%81%D0%BB%D0%B0" target="_blank" rel="noopener noreferrer">RuTube</a>
        <a href="" target="_blank" rel="noopener noreferrer">Telegram</a>
      </div>
      <div className="footer__logo">
        <div className="footer__logo-wrap">
          <img src={footerLogo} alt="БОЗОН СМЫСЛА"/>
        </div>
        <p>© {currentYear} Все права защищены</p>
      </div>
    </footer>
  )
};
export default Footer;
