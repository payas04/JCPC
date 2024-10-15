export const issuePieChart = [
	{ id: 0, value: 241, label: "JioPC", color: "#0ea5e9" }, //#20236D
	{ id: 1, value: 96, label: "HP", color: "#ef4444" },
	{ id: 2, value: 0, label: "Lenovo", color: "#f59e0b" },
];

export const totalIssuePieChart = [
	{ id: 0, value: 1, label: "Blocker", color: "#FF0000" },
	{ id: 1, value: 32, label: "Critical", color: "#FF4500" },
	{ id: 2, value: 129, label: "Major", color: "#FFA500" },
	{ id: 3, value: 149, label: "Normal", color: "#2196F3" },
	{ id: 4, value: 26, label: "Minor", color: "#4CAF50" },
];
export const openIssuePieChart = [
	{ id: 0, value: 1, label: "Blocker", color: "#FF0000" },
	{ id: 1, value: 18, label: "Critical", color: "#FF4500" },
	{ id: 2, value: 53, label: "Major", color: "#FFA500" },
	{ id: 3, value: 39, label: "Normal", color: "#2196F3" },
	{ id: 4, value: 15, label: "Minor", color: "#4CAF50" },
];

export const jioPcWorkItems = [
	{
		title: "Launch Critical",
		count: 11,
		color: "bg-red-600",
		definition:
			"Launch critical are the issues which are needed to be fixed before launching the product.",
	},
	{
		title: "Open Blocker",
		count: 10,
		color: "bg-red-800",
		definition:
			"Open blockers are the issue which are in new state and are of severity blocker.",
	},
	{
		title: "Open Critical",
		count: 66,
		color: "bg-orange-500",
		definition:
			"Open critical are the issue which are in new state and are of severity critical.",
	},
	{
		title: "Product Confirmation",
		count: 7,
		color: "bg-purple-400",
		definition:
			"Issues awaiting confirmation from the product team on whether they will be included in the scope of the project.",
	},
	{
		title: "Ready for Test",
		count: 6,
		color: "bg-blue-400",
		definition:
			"Issues which have been raised and has  been resolved by developers and are ready for testing.",
	},
	{
		title: "JioPC Accops Issues",
		count: 27,
		color: "bg-red-500",
		definition: "Issues which are raised for accops in JioPC.",
	},
];
export const hpWorkItems = [
	{
		title: "Launch Critical",
		count: 1,
		color: "bg-red-600",
		definition:
			"Launch critical are the issues which are needed to be fixed before launching the product.",
	},
	{
		title: "Open Blocker",
		count: 4,
		color: "bg-red-800",
		definition:
			"Open blockers are the issue which are in new state and are of severity blocker.",
	},
	{
		title: "Open Critical",
		count: 12,
		color: "bg-orange-500",
		definition:
			"Open critical are the issue which are in new state and are of severity critical.",
	},
	{
		title: "Product Confirmation",
		count: 0,
		color: "bg-purple-400",
		definition:
			"Issues awaiting confirmation from the product team on whether they will be included in the scope of the project.",
	},
	{
		title: "Ready for Test",
		count: 0,
		color: "bg-blue-400",
		definition:
			"Issues which have been raised and has  been resolved by developers and are ready for testing.",
	},
	{
		title: "HP Accops Issues",
		count: 0,
		color: "bg-red-500",
		definition: "Issues which are raised for accops in HP Chromebook.",
	},
];

export const jioPcAreaChartData = [
	{
		name: "Week 1",
		Issues: 51,
		pv: 139,
	},
	{
		name: "Week 2",
		Issues: 55,
		pv: 98,
	},
	{
		name: "Week 3",
		Issues: 46,
		pv: 390,
	},
	{
		name: "Week 4",
		Issues: 47,
		pv: 480,
	},
	{
		name: "Week 5",
		Issues: 42,
		pv: 380,
	},
];

export const hpAreaChartData = [
	{
		name: "Week 1",
		Issues: 30,
		pv: 539,
	},
	{
		name: "Week 2",
		Issues: 5,
		pv: 98,
	},
	{
		name: "Week 3",
		Issues: 8,
		pv: 390,
	},
	{
		name: "Week 4",
		Issues: 27,
		pv: 480,
	},
	{
		name: "Week 5",
		Issues: 26,
		pv: 380,
	},
];

export const lenovoAreaChartData = [
	{
		name: "May 24",
		uv: 204,
		pv: 149,
	},
	{
		name: "Jun 24",
		uv: 224,
		pv: 958,
	},
	{
		name: "Jul 24",
		uv: 248,
		pv: 340,
	},
	{
		name: "Aug 24",
		uv: 188,
		pv: 440,
	},
	{
		name: "Sep 24",
		uv: 249,
		pv: 340,
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
