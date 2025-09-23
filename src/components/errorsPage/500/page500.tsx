import React from 'react';
import styles from './page500.module.css';
import home from "../../../assets/icons/category/home.svg";
import reset from "../../../assets/icons/category/reset.svg";

import {useCategory} from "../../../context/CategoryContext"


function Page500() {
    const {activeCategory, setActiveCategory} = useCategory();

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div className={styles.page500}>

            <div className={styles.nameError}>500</div>
            <div className={styles.descError}>Ошибка обращения к сервису</div>
            <div className={styles.desc}>
                <p>Мы уже устраняем неисправность, попробуйте обновить страницу<br/>
                    через некоторое время. Приносим извинения за временные неудобства.
                </p>
            </div>
            <div className={styles.controlButton}>
                <div className={`${styles.nav} ${activeCategory === 'home' ? styles.active : ''}`}
                     onClick={() => handleCategoryClick('home')}>
                    <img src={home} className={styles.menuItem} alt="На главную"/>
                    <p>На главную</p>
                </div>
                <div className={`${styles.nav} ${activeCategory === 'reset' ? styles.active : ''}`}
                     onClick={() => handleCategoryClick('reset')}>
                    <img src={reset} className={styles.menuItem} alt="Обновить"/>
                    <p>Обновить страницу</p>
                </div>
            </div>
        </div>
    );
}

export default Page500;
