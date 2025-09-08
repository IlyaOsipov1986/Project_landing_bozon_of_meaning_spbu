import { Link } from "react-router-dom";
import { headerLinks } from './headerLinks';

const Nav = ({ onHandleClick = () => {} }) => {

    return (
        <nav className="nav">
            <ul>
            {headerLinks.map((link) => (
                <li key={link.id}>
                    <Link className="link" onClick={() => onHandleClick(link.link)}>
                        {link.title}
                    </Link>
                </li>
            ))}
            </ul>
      </nav>
    )
}

export default Nav;