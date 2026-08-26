import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getArticles } from "../services/api"

const LIMIT = 5

export default function Preview() {
	const [articles, setArticles] = useState([])
	const [page, setPage] = useState(0)

	useEffect(() => {
		getArticles(LIMIT, page * LIMIT).then((res) => setArticles(res.data))
	}, [page])

	const published = articles.filter((a) => a.status === "Publish")

	return (
		<div>
			<Link to="/">← Back</Link>
			<h2>Preview</h2>
			{published.map((a) => (
				<div key={a.id}>
					<h3>{a.title}</h3>
					<p>{a.category}</p>
					<p>{a.content}</p>
				</div>
			))}
			<button onClick={() => setPage((p) => Math.max(p - 1, 0))} disabled={page === 0}>
				Prev
			</button>
			<button onClick={() => setPage((p) => p + 1)} disabled={articles.length < LIMIT}>
				Next
			</button>
		</div>
	)
}
