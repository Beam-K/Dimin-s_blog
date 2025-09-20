import React, {createContext, useContext, useState, ReactNode} from 'react';

interface CategoryContextType {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    categories: Record<string, string>;
}

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
    children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({children}) => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = {
        all: 'Все статьи',
        development: 'Разработка',
        traveling: 'Путешествия',
        stories: 'Истории',
        thoughts: 'Мысли'
    };

    const value: CategoryContextType = {
        activeCategory,
        setActiveCategory,
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