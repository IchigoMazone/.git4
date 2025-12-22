import React, { createContext, useConext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);

    const setToken = (token) => {
        setAccessToken(token);
    };

    const getToken = () => {
        return accessToken;
    };
};
