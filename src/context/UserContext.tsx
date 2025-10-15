import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';

interface UserContextType {
    userName: string;
    setUserName: (name: string) => void;
    isAuthorized: boolean;
    login: (userData: { name: string; email: string }) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [userName, setUserName] = useState('');
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            setUserName(userData.name);
            setIsAuthorized(true);
        }
    }, []);

    const login = (userData: { name: string; email: string }) => {
        setUserName(userData.name);
        setIsAuthorized(true);
        // Сохраняем в localStorage
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUserName('');
        setIsAuthorized(false);
        localStorage.removeItem('user');
    };

    const value: UserContextType = {
        userName,
        setUserName,
        isAuthorized,
        login,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};