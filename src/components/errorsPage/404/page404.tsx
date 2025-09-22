import React from 'react';
import styles from './page404.module.css';
import Sidebar from "../../layout/Main/sidebar/sidebar";


function page404() {
    return (
        <div className={styles.page404}>

            <div className={styles.nameError}>404</div>
            <div className={styles.descError}>Такой страницы нет</div>
            <div className={styles.desc}>Но есть много интересного здесь:</div>
            <Sidebar orientation={"horizontal"}/>
        </div>
    );
}

export default page404;
