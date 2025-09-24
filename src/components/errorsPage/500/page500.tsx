import React from 'react';
import styles from './page500.module.css';
import home from "../../../assets/icons/category/home.svg";
import reset from "../../../assets/icons/category/reset.svg";

const handleHomeClick = () => {
    window.location.href = '/'; // Переход на главную
};

const handleRefreshClick = () => {
    window.location.reload(); // Перезагрузка страницы
};

function Page500() {


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
                <div className={styles.navi}
                     onClick={handleHomeClick}>
                    <img src={home} className={styles.menuItem} alt="На главную"/>
                    <p>На главную</p>
                </div>
                <div className={styles.navi}
                     onClick={handleRefreshClick}>
                    <img src={reset} className={styles.menuItem} alt="Обновить"/>
                    <p>Обновить страницу</p>
                </div>
            </div>
        </div>
    );
}

export default Page500;
