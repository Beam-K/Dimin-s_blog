import React from 'react';
import styles from './blockOfNotes.module.css';
import Post from "../../../ui/Post/post";
import {useCategory} from '../../../../context/CategoryContext';
import Promo from "../../../ui/Promo/promo";
import PostViewer from '../../../../logic/postViewer/postViewer'

interface ArticlesMap {
    [key: string]: string[];
}

function BlockOfNotes() {

    const {activeCategory, categories, currentArticle, setCurrentArticle} = useCategory();
    // Временные данные статей
    const articles: ArticlesMap = {
        development: ['test', 'react-guide'],
        traveling: ['travel-tips'],
        stories: ['my-story'],
        thoughts: ['philosophy']
    };

    // Если открыта статья - показываем её
    if (currentArticle) {
        return (
            <div className={styles.articleContainer}>
                <button
                    onClick={() => setCurrentArticle(null)}
                    className={styles.backButton}
                >
                    ← Назад к списку
                </button>
                <PostViewer articleSlug={currentArticle}/>
            </div>
        );
    }

    // Иначе показываем список статей
    return (
        <div className={styles.blockOfNotes}>
            <header>
                <h1>{categories[activeCategory]}</h1>
            </header>

            <div className={styles.postsGrid}>
                {articles[activeCategory]?.map((slug: string) => (
                    <Post
                        key={slug}
                        title={slug.split('-').map((word: string) =>
                            word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                        onClick={() => setCurrentArticle(slug)}
                    />
                ))}
            </div>
        </div>
    );
}

export default BlockOfNotes;
