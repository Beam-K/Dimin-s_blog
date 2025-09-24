import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

interface CategoryContextType {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    navigateToCategory: (category: string) => void;
    categories: Record<string, string>;
}

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
    children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({children}) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const navigate = useNavigate();
    const location = useLocation();

    const categories = {
        all: 'Все статьи',
        development: 'Разработка',
        traveling: 'Путешествия',
        stories: 'Истории',
        thoughts: 'Мысли',
    };

    // Синхронизация категории с URL
    useEffect(() => {
        // Если мы на главной - ничего не делаем
        if (location.pathname === '/') return;

        // Если перешли на страницу ошибки - сбрасываем категорию
        setActiveCategory('all');
    }, [location]);

    // Новая функция для навигации
    const navigateToCategory = (category: string) => {
        setActiveCategory(category);

        // Если не на главной - переходим на главную с выбранной категорией
        if (location.pathname !== '/') {
            navigate('/');
        }
    };

    const value: CategoryContextType = {
        activeCategory,
        setActiveCategory,
        navigateToCategory,
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