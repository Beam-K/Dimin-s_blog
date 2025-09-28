import React from 'react';
import styles from './main.module.css';
import Sidebar from "./sidebar/sidebar";
import BlockOfNotes from "./blockOfNotes/blockOfNotes";
import Promo from "../../ui/Promo/promo";

function Main() {
    return (
        <div className={styles.main}>
            <Sidebar/>
            <BlockOfNotes/>
        </div>
    );
}

export default Main;
