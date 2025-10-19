import React from 'react';
import styles from './UserUnauthorized.module.css';

import UserIcon from "../../../assets/icons/UserIcon.svg"


function UserUnauthorized() {
    return (
        <div className={styles.UserUnauthorized}>
            <img src={UserIcon} alt={UserIcon} className={styles.UserIcon}/>
            <p className={styles.txt}>Аккаунт</p>
        </div>
    );
}

export default UserUnauthorized;
