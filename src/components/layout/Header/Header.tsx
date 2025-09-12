import React from 'react';
import styles from './Header.module.css';
import logo from "../../../assets/images/logo.svg"

function Header() {
    return (
        <div className={styles.Header}>
            <img src={logo} className={styles.logo} alt={logo}/>
            eee
        </div>
    );
}

export default Header;
