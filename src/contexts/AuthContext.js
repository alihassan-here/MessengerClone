import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { authentication } from '../firebase';


const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                setLoading(false);
                history.push('/chats');
            }
        });

        return () => unsubscribe();
    }, [user, history]);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};