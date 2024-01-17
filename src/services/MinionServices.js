import axios from 'axios';

const baseURL = 'http://localhost:3000/minion';

const apiService = axios.create({
baseURL,
});

export const getMinions = () => {
    return apiService.get();
};

export const getMinion = (postId) => apiService.get(postId);

export const createMinion = (postData) => {
return apiService.post('/', postData);
};

export const updateMinion = (postId, updatedData) => {
return apiService.put(`/${postId}`, updatedData);
};

export const deleteMinion = (postId) => apiService.delete(postId);