import React from 'react';
import styles from './blockOfNotes.module.css';
import Post from "../../../ui/Post/post";
import {useCategory} from '../../../../context/CategoryContext';
import Promo from "../../../ui/Promo/promo";


function BlockOfNotes() {

    const {activeCategory, categories} = useCategory();
    return (
        <div className={styles.blockOfNotes}>
            <header>
                <h1>{categories[activeCategory]}</h1>
            </header>
            <div className={styles.content}>
                <div className={styles.posts}>
                    <Post/>
                    <Post/>
                </div>
                <Promo/>
            </div>
        </div>
    );
}

export default BlockOfNotes;
