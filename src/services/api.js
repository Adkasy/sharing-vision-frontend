import axios from "axios"

const api = axios.create({
	baseURL: "http://localhost:3000",
})

export const getArticles = (limit, offset) =>
	api.get(`/article/${limit}/${offset}`)

export const getArticleById = (id) => api.get(`/article/${id}`)

export const createArticle = (data) => api.post("/article/", data)

export const updateArticle = (id, data) => api.put(`/article/${id}`, data)

export default api
