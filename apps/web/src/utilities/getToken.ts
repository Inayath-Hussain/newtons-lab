const key = "accessToken";

export const getToken = () => {
    return localStorage.getItem(key)
}



export const setToken = (accessToken: string) => {
    localStorage.setItem(key, accessToken)
}