import React from 'react';
import styles from './post.module.css';

function Post() {
    return (
        <div className={styles.post}>
            <header></header>
            <main className={styles.main}></main>
            test message
            <footer></footer>
        </div>
    );
}

export default Post;
