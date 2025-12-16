import React, {useState} from 'react';
import styles from './ArticleFooter.module.css';

// Импортируем иконки (замени на свои SVG)
import likeIcon from '../../../assets/icons/stats/inactive/likes.svg';
import likeFilledIcon from '../../../assets/icons/stats/active/likes.svg';
import commentIcon from '../../../assets/icons/stats/inactive/comments.svg';
import commentFilledIcon from '../../../assets/icons/stats/active/comments.svg';
import viewsIcon from '../../../assets/icons/stats/inactive/views.svg';

interface ArticleFooterProps {
    initialLikes: number;
    initialComments: number;
    initialViews: number;
    isLiked?: boolean;
    isCommented?: boolean;
}

function ArticleFooter({
                           initialLikes,
                           initialComments,
                           initialViews,
                           isLiked = false,
                           isCommented = false
                       }: ArticleFooterProps) {
    // Состояния для интерактивности
    const [liked, setLiked] = useState(isLiked);
    const [likesCount, setLikesCount] = useState(initialLikes);
    const [commented, setCommented] = useState(isCommented);
    const [commentsCount, setCommentsCount] = useState(initialComments);

    const handleLike = () => {
        if (liked) {
            setLikesCount(prev => prev - 1);
        } else {
            setLikesCount(prev => prev + 1);
        }
        setLiked(!liked);

    };

    const handleComment = () => {
        // Переход к разделу комментариев или открытие модалки
        setCommented(true);
        // Логика для комментариев
    };

    return (
        <footer className={styles.articleFooter}>
            <div className={styles.stats}>
                <button
                    className={`${styles.iconButton} ${liked ? styles.active : ''}`}
                    onClick={handleLike}
                >
                    <img
                        src={liked ? likeFilledIcon : likeIcon}
                        alt="Лайк"
                        className={styles.icon}
                    />
                    <span className={styles.count}>{likesCount}</span>
                </button>

                {/* Кнопка комментария */}
                <button
                    className={`${styles.iconButton} ${commented ? styles.active : ''}`}
                    onClick={handleComment}
                >
                    <img
                        src={commented ? commentFilledIcon : commentIcon}
                        alt="Комментарии"
                        className={styles.icon}
                    />
                    <span className={styles.count}>{commentsCount}</span>
                </button>

                {/* Просмотры (не интерактивные) */}
                <div className={styles.views}>
                    <img src={viewsIcon} alt="Просмотры" className={styles.icon}/>
                    <span className={styles.count}>{initialViews}</span>
                </div>
            </div>
        </footer>
    );
}

export default ArticleFooter;