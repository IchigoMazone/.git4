export const setAccessToken = (token: string) => {
    localStorage.setItem("accessToken", token);
};

export const getAccessToken = (): string | null => {
    return localStorage.getItem("accessToken");
};

export const clearToken = () => {
    localStorage.removeItem("accessToken");
};
