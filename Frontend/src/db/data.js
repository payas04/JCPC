export const issuePieChart = [
	{ id: 0, value: 241, label: "JioPC", color: "#2E8B57" }, //#20236D
	{ id: 1, value: 96, label: "HP Chromebook", color: "#D2691E" },
];

export const totalIssuePieChart = [
	{ id: 0, value: 1, label: "Blocker", color: "#991B1B" },
	{ id: 1, value: 32, label: "Critical", color: "#DC2626" },
	{ id: 2, value: 129, label: "Major", color: "#F97316" },
	{ id: 3, value: 149, label: "Normal", color: "#A855F7" },
	{ id: 4, value: 26, label: "Minor", color: "#3B82F6" },
];
export const openIssuePieChart = [
	{ id: 0, value: 1, label: "Blocker", color: "#991B1B" },
	{ id: 1, value: 18, label: "Critical", color: "#DC2626" },
	{ id: 2, value: 53, label: "Major", color: "#F97316" },
	{ id: 3, value: 39, label: "Normal", color: "#A855F7" },
	{ id: 4, value: 15, label: "Minor", color: "#3B82F6" },
];

export const jioPcWorkItems = [
	{
		title: "Launch Critical",
		count: 3,
		color: "bg-red-300",
		text: "text-red-800",
		definition:
			"Launch critical are the issues which are needed to be fixed before launching the product.",
	},
	{
		title: "Open Blocker",
		count: 0,
		color: "bg-orange-200",
		text: "text-orange-800",
		definition:
			"Open blockers are the issue which are in new state and are of severity blocker.",
	},
	{
		title: "Open Critical",
		count: 12,
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
			"Issues awaiting confirmation from the product team on whether they will be included in the scope of the project.",
	},
	{
		title: "Ready for Test",
		count: 0,
		color: "bg-blue-200",
		text: "text-blue-800",
		definition:
			"Issues which have been raised and has  been resolved by developers and are ready for testing.",
	},
	{
		title: "JioPC Accops Issues",
		count: 0,
		color: "bg-green-200",
		text: "text-green-800",
		definition: "Issues which are raised for accops in JioPC.",
	},
];
export const hpWorkItems = [
	{
		title: "Launch Critical",
		count: 0,
		color: "bg-red-200",
		text: "text-red-800",
		definition:
			"Launch critical are the issues which are needed to be fixed before launching the product.",
	},
	{
		title: "Open Blocker",
		count: 1,
		color: "bg-orange-200",
		text: "text-orange-800",
		definition:
			"Open blockers are the issue which are in new state and are of severity blocker.",
	},
	{
		title: "Open Critical",
		count: 6,
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
			"Issues awaiting confirmation from the product team on whether they will be included in the scope of the project.",
	},
	{
		title: "Ready for Test",
		count: 0,
		color: "bg-blue-200",
		text: "text-blue-800",
		definition:
			"Issues which have been raised and has  been resolved by developers and are ready for testing.",
	},
	{
		title: "HP Accops Issues",
		count: 4,
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

export const aiBotData = [
	{
		intent: 20,
	},
];
