import axios from "axios"

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})

export const getArticles = (limit, offset) =>
	api.get(`/article/${limit}/${offset}`)

export const getArticleById = (id) => api.get(`/article/${id}`)

export const createArticle = (data) => api.post("/article/", data)

export const updateArticle = (id, data) => api.put(`/article/${id}`, data)

export default api
