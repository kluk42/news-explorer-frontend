import React, { createContext, useContext, useState, useEffect } from 'react';
import MainApi from '../../utils/MainApi/MainApi';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [ userInfo, setUserInfo ] = useState({
        isLoading: true,
        user: null,
    });

    const getUser = async (token) => {
        try {
            if (token) {
                const mainApi = new MainApi(token);
                const userFromServer = await mainApi.getUserInfo();
                setUserInfo(userInfo => ({
                    ...userInfo,
                    user: userFromServer
                }));
            }
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setUserInfo(userInfo => ({...userInfo, isLoading: false}));
        }
    }

    useEffect(() => {
            const token = localStorage.getItem('token');
            getUser(token)
    }, [])

    const deleteUser = () => {
        localStorage.removeItem('token');
        setUserInfo((userInfo) => ({
            ...userInfo,
            user: null,
        }))
    }

    return (
        <UserContext.Provider value={{userInfo, getUser, deleteUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const user = useContext(UserContext);
    if (user === undefined) {
        throw new Error('Не обернул в провайдер');
    }
    return user
}