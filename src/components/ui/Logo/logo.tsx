import React from 'react';
import {Link} from 'react-router-dom';
import styles from './logo.module.css';


function Logo() {
    return (
        <Link to="/" className={styles.logo}>
            Melkov's
        </Link>
    );
}

export default Logo;