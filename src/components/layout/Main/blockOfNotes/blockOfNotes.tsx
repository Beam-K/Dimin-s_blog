import React from 'react';
import styles from './blockOfNotes.module.css';
import Post from "../../../ui/Post/post";

function BlockOfNotes() {
    return (
        <div className={styles.blockOfNotes}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default BlockOfNotes;
