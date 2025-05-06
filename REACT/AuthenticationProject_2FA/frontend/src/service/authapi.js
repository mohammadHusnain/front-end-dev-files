import api from "./api"

export const register = async (username , password) => {
    return await api.post("/auth/register" , {
        username,
        password,
    })
}
export const login = async (username , password) => {
    return await api.post("/auth/login" , {
        username,
        password,
    },
{
withCredentials:true,
})
}

export const authStatus = async (username, password) => {
    return await api.post("/auth/register", {
        username,
        password,
    })
}