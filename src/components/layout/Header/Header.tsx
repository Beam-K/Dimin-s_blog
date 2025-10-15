import React from 'react';
import styles from './Header.module.css';
import logo from "../../../assets/images/Melkov's.svg"
import Search from "../../ui/Search/inputSearch";
import UserAuthorized from "../../../components/ui/UserAuthorized/UserAuthorized"
import UserUnauthorized from "../../ui/UserUnauthorized/UserUnauthorized";
import {Link} from 'react-router-dom';
import {useUser} from '../../../context/UserContext'; // Добавляем хук

function Header() {
    const {isAuthorized} = useUser();

    return (
        <div className={styles.Header}>
            <img src={logo} className={styles.logo} alt="Logo"/>
            <Search/>


            {isAuthorized ? (
                <UserAuthorized/>
            ) : (
                <Link to="/author" className={styles.authLink}>
                    <UserUnauthorized/>
                </Link>
            )}
        </div>
    );
}

export default Header;