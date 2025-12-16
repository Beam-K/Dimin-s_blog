import React from 'react';
import styles from './post.module.css';

interface PostProps {
    title: string;
    onClick: () => void;
}

function Post({title, onClick}: PostProps) {
    return (
        <div className={styles.post}>
            <header onClick={onClick}> {title}</header>
            <footer>
                
            </footer>
        </div>
    );
}

export default Post;
