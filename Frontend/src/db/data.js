export const issuePieChart = [
	{ id: 0, value: 350, label: "X2 Issues", color: "#82B7CA" }, //#20236D
	{ id: 1, value: 106, label: "X4 Issues", color: "#82ca9d" },
];

export const totalIssuePieChart = [
	{ id: 0, value: 2, label: "Blocker", color: "#f87171" },
	{ id: 1, value: 45, label: "Critical", color: "#fb923c" },
	{ id: 2, value: 165, label: "Major", color: "#facc15" },
	{ id: 3, value: 206, label: "Normal", color: "#60a5fa" },
	{ id: 4, value: 38, label: "Minor", color: "#34d399" },
];
export const jioPcOpenIssuePieChart = [
	{ id: 0, value: 1, label: "Blocker", color: "#f87171" },
	{ id: 1, value: 17, label: "Critical", color: "#fb923c" },
	{ id: 2, value: 59, label: "Major", color: "#facc15" },
	{ id: 3, value: 39, label: "Normal", color: "#60a5fa" },
	{ id: 4, value: 15, label: "Minor", color: "#34d399" },
];
export const hpOpenIssuePieChart = [
	{ id: 0, value: 1, label: "Blocker", color: "#f87171" },
	{ id: 1, value: 6, label: "Critical", color: "#fb923c" },
	{ id: 2, value: 4, label: "Major", color: "#facc15" },
	{ id: 3, value: 1, label: "Normal", color: "#60a5fa" },
	{ id: 4, value: 1, label: "Minor", color: "#34d399" },
];

export const jioPcWorkItems = [
	{
		title: "Launch Critical",
		count: 15,
		color: "bg-red-200",
		text: "text-red-800",
		definition:
			"Launch critical are the issues which are needed to be fixed before launching the product.",
	},
	{
		title: "Open Blocker",
		count: 9,
		color: "bg-orange-200",
		text: "text-orange-800",
		definition:
			"Open blockers are the issue which are in new state and are of severity blocker.",
	},
	{
		title: "Open Critical",
		count: 74,
		color: "bg-yellow-200",
		text: "text-yellow-800",
		definition:
			"Open critical are the issue which are in new state and are of severity critical.",
	},
	{
		title: "Product Confirmation",
		count: 8,
		color: "bg-purple-200",
		text: "text-purple-800",
		definition:
			"Issues awaiting product team confirmation for project scope inclusion.",
	},
	{
		title: "Ready for Test",
		count: 0,
		color: "bg-sky-200",
		text: "text-sky-800",
		definition:
			"Issues which have been raised and has  been resolved by developers and are ready for testing.",
	},
	{
		title: "JioPC Accops Issues",
		count: 57,
		color: "bg-green-200",
		text: "text-green-800",
		definition: "Issues which are raised for accops in JioPC.",
	},
];
export const hpWorkItems = [
	{
		title: "Launch Critical",
		count: 1,
		color: "bg-red-200",
		text: "text-red-800",
		definition:
			"Launch critical are the issues which are needed to be fixed before launching the product.",
	},
	{
		title: "Open Blocker",
		count: 4,
		color: "bg-orange-200",
		text: "text-orange-800",
		definition:
			"Open blockers are the issue which are in new state and are of severity blocker.",
	},
	{
		title: "Open Critical",
		count: 13,
		color: "bg-yellow-200",
		text: "text-yellow-800",
		definition:
			"Open critical are the issue which are in new state and are of severity critical.",
	},
	{
		title: "Product Confirmation",
		count: 0,
		color: "bg-purple-200",
		text: "text-purple-800",
		definition:
			"Issues awaiting product team confirmation for project scope inclusion.",
	},
	{
		title: "Ready for Test",
		count: 0,
		color: "bg-sky-200",
		text: "text-sky-800",
		definition:
			"Issues which have been raised and has  been resolved by developers and are ready for testing.",
	},
	{
		title: "HP Accops Issues",
		count: 39,
		color: "bg-green-200",
		text: "text-green-800",
		definition: "Issues which are raised for accops in HP Chromebook.",
	},
];

export const jioPcAreaChartData = [
	{
		name: "Week 1",
		Issues: 51,
	},
	{
		name: "Week 2",
		Issues: 55,
	},
	{
		name: "Week 3",
		Issues: 46,
	},
	{
		name: "Week 4",
		Issues: 47,
	},
	{
		name: "Week 5",
		Issues: 42,
	},
	{
		name: "Week 6",
		Issues: 57,
	},
	{
		name: "Week 7",
		Issues: 52,
	},
];

export const hpAreaChartData = [
	{
		name: "Week 1",
		Issues: 30,
	},
	{
		name: "Week 2",
		Issues: 5,
	},
	{
		name: "Week 3",
		Issues: 8,
	},
	{
		name: "Week 4",
		Issues: 27,
	},
	{
		name: "Week 5",
		Issues: 26,
	},
	{
		name: "Week 6",
		Issues: 2,
	},
	{
		name: "Week 7",
		Issues: 8,
	},
];

export const selfieBarData = [
	{
		name: "Phase 1",
		Portrait: 462,
		Landscape: 458,
	},
	{
		name: "Phase 2",
		Portrait: 669,
		Landscape: 674,
	},
	{
		name: "Total",
		Portrait: 1131,
		Landscape: 1132,
	},
];

export const aiBotBarData = [
	{
		name: "Technical",
		intents: 21,
		expressions: 300,
	},
	{
		name: "Non Technical",
		intents: 20,
		expressions: 181,
	},
];
