import { useState } from "react";
import TeamData from "../../db/TeamData.json";

import {
	getTodaysBirthdays,
	getUpcomingBirthdaysThisMonth,
} from "../../hooks/birthday";

import TeamSection from "../../components/TeamSection";
import SortControls from "../../components/SortControl";
import BirthdaySection from "../../components/BirthdaySection";

const JioCloudPc = () => {
	const sortByNameAscending = (array) =>
		[...array].sort((a, b) => a.Name.localeCompare(b.Name));

	const sortByScore = (array, order = "asc") => {
		return [...array].sort((a, b) => {
			if (a.Total_score === b.Total_score) {
				// If scores are equal, sort by Name
				return a.Name.localeCompare(b.Name);
			}
			// Otherwise, sort by score
			return order === "asc"
				? a.Total_score - b.Total_score
				: b.Total_score - a.Total_score;
		});
	};

	const [data, setData] = useState(sortByScore(TeamData, "desc"));
	const [activeSort, setActiveSort] = useState("High");
	const todayBirthday = getTodaysBirthdays(TeamData);
	const upcomingBirthday = getUpcomingBirthdaysThisMonth(TeamData);

	const handleSortByName = () => {
		setData(sortByNameAscending(TeamData));
		setActiveSort("Name");
	};

	const handleSortByScoreAsc = () => {
		setData(sortByScore(TeamData, "asc"));
		setActiveSort("Low");
	};

	const handleSortByScoreDesc = () => {
		setData(sortByScore(TeamData, "desc"));
		setActiveSort("High");
	};

	return (
		<div className="flex h-screen w-full flex-1 bg-gray-100">
			<TeamSection data={data} />
			<section className="w-1/4 bg-contain shadow-lg">
				<SortControls
					activeSort={activeSort}
					handleSortByName={handleSortByName}
					handleSortByScoreAsc={handleSortByScoreAsc}
					handleSortByScoreDesc={handleSortByScoreDesc}
				/>
				<BirthdaySection
					todayBirthday={todayBirthday}
					upcomingBirthday={upcomingBirthday}
				/>
			</section>
		</div>
	);
};

export default JioCloudPc;
