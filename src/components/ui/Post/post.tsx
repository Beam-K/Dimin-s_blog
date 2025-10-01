import React from 'react';
import styles from './post.module.css';

interface PostProps {
    title: string;
    onClick: () => void;
}

function Post({title, onClick}: PostProps) {
    return (
        <div className={styles.post}>
            <header className={styles.post} onClick={onClick}> {title}</header>
            <main className={styles.main}></main>
            test message
            <footer></footer>
        </div>
    );
}

export default Post;
