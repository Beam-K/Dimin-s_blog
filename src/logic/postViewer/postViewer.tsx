import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleViewerProps {
    articleSlug: string;
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

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
        </ReactMarkdown>
    );
}

export default PostViewer;