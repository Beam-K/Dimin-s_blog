import React from 'react';
import styles from './sidebar.module.css';

import development from "../../../../assets/icons/category/development.svg"
import stories from "../../../../assets/icons/category/stories.svg"
import thoughts from "../../../../assets/icons/category/thoughts.svg"
import traveling from "../../../../assets/icons/category/traveling.svg"

import {useCategory} from "../../../../context/CategoryContext"

function Sidebar() {
    const {activeCategory, setActiveCategory} = useCategory();

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };


    return (
        <div className={styles.sidebar}>

            <div className={`${styles.nav} ${activeCategory === 'development' ? styles.active : ''}`}
                 onClick={() => handleCategoryClick('development')}>
                <img src={development} className={styles.menuItem} alt="Разработка"/>
                <p>Разработка</p>
            </div>
            <div className={`${styles.nav} ${activeCategory === 'traveling' ? styles.active : ''}`}
                 onClick={() => handleCategoryClick('traveling')}>
                <img src={traveling} className={styles.menuItem} alt="Путешествия"/>
                <p>Путешествия</p>
            </div>
            <div className={`${styles.nav} ${activeCategory === 'stories' ? styles.active : ''}`}
                 onClick={() => handleCategoryClick('stories')}>
                <img src={stories} className={styles.menuItem} alt="Истории"/>
                <p>Истории</p>
            </div>
            <div className={`${styles.nav} ${activeCategory === 'thoughts' ? styles.active : ''}`}
                 onClick={() => handleCategoryClick('thoughts')}>
                <img src={thoughts} className={styles.menuItem} alt="Мысли"/>
                <p>Мысли</p>
            </div>
        </div>
    );
}

export default Sidebar;
