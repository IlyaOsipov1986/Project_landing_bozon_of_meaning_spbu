import { headerLinks } from './headerLinks';

const Nav = ({ onHandleClick = () => {} }) => {

    return (
        <nav className="nav">
            <ul>
            {headerLinks.map((link) => (
                <li key={link.id}>
                    <a className="link" onClick={() => onHandleClick(link.link)}>
                        {link.title}
                    </a>
                </li>
            ))}
            </ul>
      </nav>
    )
}

export default Nav;