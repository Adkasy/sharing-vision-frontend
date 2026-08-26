import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getArticleById, updateArticle } from "../services/api"

export default function EditArticle() {
	const { id } = useParams()
	const navigate = useNavigate()
	const [form, setForm] = useState({ title: "", content: "", category: "" })

	useEffect(() => {
		getArticleById(id).then((res) => {
			const article = res.data
			setForm({
				title: article.title,
				content: article.content,
				category: article.category,
			})
		})
	}, [id])

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (status) => {
		if (form.title.length < 20) {
			alert("Title minimal 20 karakter")
			return
		}
		if (form.content.length < 200) {
			alert("Content minimal 200 karakter")
			return
		}
		if (form.category.length < 3) {
			alert("Category minimal 3 karakter")
			return
		}

		await updateArticle(id, { ...form, status })
		navigate("/")
	}

	return (
		<div>
			<Link to="/">← Back</Link>
			<h2>Edit Article</h2>
			<div className="field-group">
				<div>
					<label>Title</label>
					<input name="title" value={form.title} onChange={handleChange} />
				</div>
				<div>
					<label>Content</label>
					<textarea name="content" value={form.content} onChange={handleChange} />
				</div>
				<div>
					<label>Category</label>
					<input name="category" value={form.category} onChange={handleChange} />
				</div>
				<div className="actions">
					<button onClick={() => handleSubmit("Publish")}>Publish</button>
					<button onClick={() => handleSubmit("Draft")}>Draft</button>
				</div>
			</div>
		</div>
	)
}
