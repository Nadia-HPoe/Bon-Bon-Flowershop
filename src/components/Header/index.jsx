import { Icons } from "../Icons";
import Logo from "../../assets/images/logo.svg";
import headerStyles from "./header.module.scss";

function Header() {
    return (
        <div>
            <header className={headerStyles.header}>
                <div className={headerStyles.header__container}>
                    <div className={headerStyles.header__leftContainer}>
                        <div className={headerStyles.header__logo}><img src={Logo} alt="logo" /></div>
                        <nav>
                            <ul className={headerStyles.header__menu}>
                                <li className={headerStyles.header__menuItem}><a href="#" className={headerStyles.header__menuLink}>Каталог</a></li>
                                <li className={headerStyles.header__menuItem}><a href="#" className={headerStyles.header__menuLink}>О нас</a></li>
                                <li className={headerStyles.header__menuItem}><a href="#" className={headerStyles.header__menuLink}>Блог</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={headerStyles.header__rightContainer}>
                        <div className={headerStyles.header__search}>
                            <Icons name="magnifying-glass" size="28" color="#3F3F3F" />
                            <input type="text" className={headerStyles.header__input}/>
                        </div>
                        <div className={headerStyles.header__phone}>
                            <div className={headerStyles.header__phoneNumber}>+7 999 111 22 33</div>
                            <a href="https://wa.me/message/CGNNUIQSEJQYB1"><Icons name="phone" size="42" color="#023E3B" /></a>
                        </div>
                        <div className={headerStyles.header__icons}>
                            <a href="#" className={headerStyles.header__icon}><Icons name="user" size="28" color="#727272" /></a>
                            <a href="#" className={headerStyles.header__icon}><Icons name="heart" size="22" color="#727272" /></a>
                            <a href="#" className={headerStyles.header__icon}><Icons name="shopping-cart" size="32" color="#727272" /></a>
                        </div>
                    </div>    
                </div>
            </header>
        </div>
    );
}

export { Header };
