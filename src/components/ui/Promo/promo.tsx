import React from 'react';
import styles from './promo.module.css';

import logo from "../../../assets/images/logo.svg"

function Promo() {
    return (
        <div className={styles.promo}>
            <div className={styles.promoHeader}>
                <div className={styles.shellLogo}>
                    <img src={logo} className={logo}/>
                </div>
                <div className={styles.marking}>
                    Реклама
                </div>
            </div>

            <div className={styles.promoMain}>
                <div className={styles.headerBlock}>
                    С# с нуля!
                </div>
                <div className={styles.descriptionBlock}>
                    Полный онлайн-курс<br/>
                    для начинающих!
                </div>
            </div>
            <div className={styles.promoButton}>
                Подробнее
            </div>
        </div>


    )
}

export default Promo;
