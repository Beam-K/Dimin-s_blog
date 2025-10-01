import React, {createContext, useContext, useState, ReactNode} from 'react';

// Интерфейс ДО компонента
interface CategoryContextType {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    currentArticle: string | null;
    setCurrentArticle: (slug: string | null) => void;
    categories: Record<string, string>;
}

// Экспорт ДО компонента
export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
    children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({children}) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentArticle, setCurrentArticle] = useState<string | null>(null);

    const categories = {
        all: 'Все статьи',
        development: 'Разработка',
        traveling: 'Путешествия',
        stories: 'Истории',
        thoughts: 'Мысли',
    };

    const value: CategoryContextType = {
        activeCategory,
        setActiveCategory,
        currentArticle,
        setCurrentArticle,
        categories
    };

    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = (): CategoryContextType => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};