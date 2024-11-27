export const useSort = () => {
	const handleSortByName = () => {
		setData(sortByNameAscending(profiles));
		setActiveSort("Name");
	};

	const handleSortByScoreAsc = () => {
		setData(sortByScore(profiles, "asc"));
		setActiveSort("Low");
	};

	const handleSortByScoreDesc = () => {
		setData(sortByScore(profiles, "desc"));
		setActiveSort("High");
	};

	return {
		handleSortByName,
		handleSortByScoreAsc,
		handleSortByScoreDesc,
	};
};
