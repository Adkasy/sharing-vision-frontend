const TABS = ["Publish", "Draft", "Thrash"]

export default function Tabs({ active, onChange }) {
	return (
		<div>
			{TABS.map((tab) => (
				<button
					key={tab}
					onClick={() => onChange(tab)}
					style={{ fontWeight: active === tab ? "bold" : "normal" }}
				>
					{tab}
				</button>
			))}
		</div>
	)
}
