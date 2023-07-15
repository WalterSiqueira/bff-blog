import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(() => {
        const storedIsLogged = localStorage.getItem('isLogged');
        return storedIsLogged ? JSON.parse(storedIsLogged) : false;
    });
    const [username, setUsername] = useState(() => {
        const storedUsername = localStorage.getItem('username');
        return storedUsername ? JSON.parse(storedUsername) : '';
    });

    const login = (username) => {
        setIsLogged(true);
        setUsername(username);
        localStorage.setItem('isLogged', true);
        localStorage.setItem('username', JSON.stringify(username));
    };

    const logout = () => {
        setIsLogged(false);
        setUsername('');
        localStorage.setItem('isLogged', false);
        localStorage.removeItem('username');
    };
    const authContextValue = {
        isLogged,
        username,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};


