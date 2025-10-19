import React from 'react';
import styles from './Header.module.css';
import Logo from "../../../components/ui/Logo/logo"
import Search from "../../ui/Search/inputSearch";
import UserAuthorized from "../../../components/ui/UserAuthorized/UserAuthorized"
import UserUnauthorized from "../../ui/UserUnauthorized/UserUnauthorized";
import {Link} from 'react-router-dom';
import {useUser} from '../../../context/UserContext';

function Header() {
    const {isAuthorized} = useUser();

    return (
        <div className={styles.Header}>
            <Logo/>
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