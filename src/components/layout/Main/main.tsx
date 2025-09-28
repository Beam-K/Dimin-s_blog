import React from 'react';
import styles from './main.module.css';
import Sidebar from "./sidebar/sidebar";
import BlockOfNotes from "./blockOfNotes/blockOfNotes";
import Donation from "../../ui/donation/donation";

function Main() {
    return (
        <div className={styles.main}>
            <Sidebar/>
            <BlockOfNotes/>
            <Donation/>
        </div>
    );
}

export default Main;
