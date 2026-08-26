const TABS = ["Publish", "Draft", "Thrash"]

export default function Tabs({ active, onChange }) {
	return (
		<div className="tabs">
			{TABS.map((tab) => (
				<button
					key={tab}
					className={active === tab ? "active" : ""}
					onClick={() => onChange(tab)}
				>
					{tab}
				</button>
			))}
		</div>
	)
}
