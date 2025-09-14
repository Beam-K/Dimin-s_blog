import React from 'react';
import styles from './Header.module.css';

import logo from "../../../assets/images/Melkov's.svg"
import Search from "../../ui/Search/inputSearch";
import UserAuthorized from "../../../components/ui/UserAuthorized/UserAuthorized"


function Header() {
    return (
        <div className={styles.Header}>
            <img src={logo} className={styles.logo} alt={logo}/>

            <Search/>
            <UserAuthorized/>
        </div>
    );
}

export default Header;
