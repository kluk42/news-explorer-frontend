import LoginControlBtn from '../LoginControltBtn/LoginControlBtn';
import { useLocation, NavLink } from 'react-router-dom';
import { useUser } from '../../utils/useUser/useUser';

function Navigation ({ isMenuOpen, onLoginBtnClick }) {
  const { userInfo } = useUser();
  const isLoggedIn = !!userInfo.user;
  const isInSavedNews = useLocation().pathname === '/saved-news';
    return (
        <nav className={`navigation ${isMenuOpen && 'navigation_open'}`} >
            <ul className="navigation__menu">
                <li className="navigation__menu-item">
                    <NavLink exact activeClassName="navigation__link_active navigation__link_colors_white" className={`navigation__link ${isInSavedNews && !isMenuOpen && 'navigation__link_colors_black'} ${isMenuOpen && 'navigation__link_colors_white'}`} to="/">Главная</NavLink>
                </li>
                {
                    isLoggedIn && <li className="navigation__menu-item">
                        <NavLink exact activeClassName={`navigation__link_active ${!isMenuOpen && 'navigation__link_colors_black'}`} className={`navigation__link ${!isInSavedNews && 'navigation__link_colors_white'} ${isMenuOpen && 'navigation__link_colors_white'}`} to="/saved-news">Сохранённые статьи</NavLink>
                    </li>
                }
            </ul>
            <LoginControlBtn onAuthorizeClick = {onLoginBtnClick} />
            <div className={`navigation__shadow ${!isMenuOpen && 'navigation__shadow_invisible'}`}></div>
        </nav>
    )
}

export default Navigation;