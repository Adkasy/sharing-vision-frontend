import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Pencil, Trash2 } from "lucide-react"
import Tabs from "../components/Tabs"
import { getArticles, updateArticle } from "../services/api"

export default function AllPosts() {
	const [activeTab, setActiveTab] = useState("Publish")
	const [articles, setArticles] = useState([])

	useEffect(() => {
		getArticles(50, 0).then((res) => setArticles(res.data))
	}, [])

	const filtered = articles.filter((a) => a.status === activeTab)

	const handleTrash = async (article) => {
		const updated = { ...article, status: "Thrash" }
		await updateArticle(article.id, updated)
		setArticles((prev) =>
			prev.map((a) => (a.id === article.id ? updated : a))
		)
	}

	return (
		<div>
			<Link to="/add-new" className="btn">+ Add New</Link>
			<Tabs active={activeTab} onChange={setActiveTab} />
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Category</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{filtered.map((a) => (
						<tr key={a.id}>
							<td>{a.title}</td>
							<td>{a.category}</td>
							<td>
								<Link to={`/edit/${a.id}`} className="icon-btn" title="Edit">
									<Pencil size={16} />
								</Link>
								<button className="icon-btn" title="Trash" onClick={() => handleTrash(a)}>
									<Trash2 size={16} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
