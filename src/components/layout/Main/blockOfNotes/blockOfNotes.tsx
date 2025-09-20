import React from 'react';
import styles from './blockOfNotes.module.css';
import Post from "../../../ui/Post/post";
import {useCategory} from '../../../../context/CategoryContext';

function BlockOfNotes() {

    const {activeCategory, categories} = useCategory();
    return (
        <div className={styles.blockOfNotes}>
            <div>
                <h1>{categories[activeCategory]}</h1>
            </div>

            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default BlockOfNotes;
