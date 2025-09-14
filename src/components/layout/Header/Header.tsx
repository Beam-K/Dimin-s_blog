import React from 'react';
import styles from './Header.module.css';

import logo from "../../../assets/images/Melkov's.svg"
import Search from "../../ui/Search/inputSearch";
import UserUnauthorized from "../../../components/ui/UserUnauthorized/UserUnauthorized"


function Header() {
    return (
        <div className={styles.Header}>
            <img src={logo} className={styles.logo} alt={logo}/>

            <Search/>
            <UserUnauthorized/>
        </div>
    );
}

export default Header;
