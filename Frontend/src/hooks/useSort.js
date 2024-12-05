export const useSort = (array, order) => {
	const sortByNameAscending = (array) =>
		[...array].sort((a, b) => a.name.localeCompare(b.name));

	const sortByScore = (array, order = "asc") => {
		return [...array].sort((a, b) => {
			if (a.score.current === b.score.current) {
				// If scores are equal, sort by Name
				return a.name.localeCompare(b.name);
			}
			// Otherwise, sort by score
			return order === "asc"
				? a.score.current - b.score.current
				: b.score.current - a.score.current;
		});
	};

	return {
		sortByNameAscending,
		sortByScore,
	};
};
