import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { createArticle } from "../services/api"

export default function AddNew() {
	const navigate = useNavigate()
	const [form, setForm] = useState({ title: "", content: "", category: "" })

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

		await createArticle({ ...form, status })
		navigate("/")
	}

	return (
		<div>
			<Link to="/" className="btn">← Back</Link>
			<h2>Add New Article</h2>
			<div className="field-group">
				<div>
					<label>Title</label>
					<input name="title" value={form.title} onChange={handleChange} />
				</div>
				<div>
					<label>Content</label>
					<textarea
						name="content"
						value={form.content}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Category</label>
					<input
						name="category"
						value={form.category}
						onChange={handleChange}
					/>
				</div>
				<div className="actions">
					<button onClick={() => handleSubmit("Publish")}>Publish</button>
					<button onClick={() => handleSubmit("Draft")}>Draft</button>
				</div>
			</div>
		</div>
	)
}
