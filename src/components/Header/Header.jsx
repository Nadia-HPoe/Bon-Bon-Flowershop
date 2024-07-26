import { Icons } from "../Icons";
import Logo from "../../assets/images/logo.svg";
import styles from "./header.module.scss";

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <div className={styles.header__leftContainer}>
                        <div className={styles.header__logo}><img src={Logo} alt="logo" /></div>
                        <nav>
                            <ul className={styles.header__menu}>
                                <li className={styles.header__menuItem}><a href="#" className={styles.header__menuLink}>Каталог</a></li>
                                <li className={styles.header__menuItem}><a href="#" className={styles.header__menuLink}>О нас</a></li>
                                <li className={styles.header__menuItem}><a href="#" className={styles.header__menuLink}>Блог</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.header__rightContainer}>
                        <div className={styles.header__search}>
                            <Icons name="magnifying-glass" size="26" color="#042423" />
                            <input type="text" className={styles.header__input}/>
                        </div>
                        <div className={styles.header__phone}>
                            <div className={styles.header__phoneNumber}>+7 999 111 22 33</div>
                            <a href="https://wa.me/message/CGNNUIQSEJQYB1"><Icons name="phone" size="35" color="#023E3B" /></a>
                        </div>
                        <div className={styles.header__icons}>
                            <a href="#" className={styles.header__icon}><Icons name="user" size="28" color="#727272" /></a>
                            <a href="#" className={styles.header__icon}><Icons className={headerStyles.icon__heart} name="heart" size="22" color="#EBEBEB" /></a>
                            <a href="#" className={styles.header__icon}><Icons name="shopping-cart" size="32" color="#727272" /></a>
                        </div>
                    </div>    
                </div>
            </header>
        </div>
    );
}

export { Header };
