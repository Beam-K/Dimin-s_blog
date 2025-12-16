import React from 'react';
import {Link} from 'react-router-dom';
import styles from './logo.module.css';
import logo from "../../../assets/images/logoProduct.svg"


function Logo() {
    return (
        <Link to="/" className={styles.logoShell}>
            <img src={logo} alt="logo" className={styles.logo}/>
        </Link>
    );
}

export default Logo;