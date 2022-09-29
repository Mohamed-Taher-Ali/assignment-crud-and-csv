import api from "./api"


export const getUsers = (page=1, limit=10) => {
    return api.get(`/users?page=${page}&limit=${limit}`);
};


export const getUser = (userId) => {
    return api.get(`/users/${userId}`);
};


export const deleteUser = (userId) => {
    return api.delete(`/users/${userId}`);
};


export const addUser = (newUserData) => {
    return api.post(`/users`, {
        ...(newUserData || {})
    });
};


export const updateUser = (userId, updatedUserData) => {
    return api.put(`/users/${userId}`, {
        ...(updatedUserData || {})
    });
};