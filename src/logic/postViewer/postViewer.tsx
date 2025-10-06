import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import 'highlight.js/styles/atom-one-light.min.css';
import styles from './PostViewer.module.css';

interface ArticleViewerProps {
    articleSlug: string;
}

interface CodeProps {
    node?: any;
    className?: string;
    children?: React.ReactNode;

    [key: string]: any;
}

function PostViewer({articleSlug}: ArticleViewerProps) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadArticle = async () => {
            try {
                const response = await fetch(`/markdown/${articleSlug}.md`);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Ошибка загрузки статьи:', error);
                setContent('# Статья не найдена\n\nПопробуйте другую статью.');
            } finally {
                setLoading(false);
            }
        };

        loadArticle();
    }, [articleSlug]);

    const CodeBlock = ({node, className, children, ...props}: CodeProps) => {
        const match = /language-(\w+)/.exec(className || '');
        const isInline = !match;

        if (isInline) {
            return (
                <code className={styles.inlineCode} {...props}>
                    {children}
                </code>
            );
        }

        return (
            <div className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                    <span>{match[1]}</span>
                </div>
                <code className={className} {...props}>
                    {children}
                </code>
            </div>
        );
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <div className={styles.container}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                    code: CodeBlock
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default PostViewer;