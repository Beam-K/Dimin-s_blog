import React from 'react';
import styles from './page404.module.css';
import Sidebar from "../../layout/Main/sidebar/sidebar";


function page404() {
    return (
        <div className={styles.page404}>

            <div> 404</div>
            <div></div>
            <Sidebar orientation={"horizontal"}/>
        </div>
    );
}

export default page404;
