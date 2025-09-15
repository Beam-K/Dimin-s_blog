import React from 'react';
import styles from './sidebar.module.css';

import development from "../../../../assets/icons/category/development.svg"
import stories from "../../../../assets/icons/category/stories.svg"
import thoughts from "../../../../assets/icons/category/thoughts.svg"
import traveling from "../../../../assets/icons/category/traveling.svg"


function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.nav}>
                <img src={development} className={styles.menuItem} alt={development}/>
                <p>Разработка</p>
            </div>
            <div className={styles.nav}>
                <img src={traveling} className={styles.menuItem} alt={development}/>
                <p>Путешествия</p>
            </div>
            <div className={styles.nav}>
                <img src={stories} className={styles.menuItem} alt={development}/>
                <p>Истории</p>
            </div>
            <div className={styles.nav}>
                <img src={thoughts} className={styles.menuItem} alt={development}/>
                <p>Мысли</p>
            </div>


        </div>
    );
}

export default Sidebar;
