import React from 'react';
import styles from './UserAuthorized.module.css';
import {useUser} from '../../../context/UserContext';

function UserAuthorized() {
    const {userName} = useUser();
    const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';

    return (
        <div className={styles.UserAuthorized}>
            <div className={styles.profileCircle}>
                <p>{firstLetter}</p>
            </div>
            <div className={styles.UserName}>
                <p>{userName}</p>
            </div>
        </div>
    );
}

export default UserAuthorized;