import { useState } from "react";
import { CustomCard } from "../../components/CustomCard";
import Sidebar from "../../components/Sidebar";
import TeamData from "../../TeamData.json";
import { AiOutlineSortAscending } from "react-icons/ai";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";
import {
	getTodaysBirthdays,
	getUpcomingBirthdaysThisMonth,
} from "../../hooks/birthday";

const sortByNameAscending = (array) =>
	[...array].sort((a, b) => a.Name.localeCompare(b.Name));

const sortByScore = (array, order = "asc") => {
	return [...array].sort((a, b) =>
		order === "asc"
			? a.Total_score - b.Total_score
			: b.Total_score - a.Total_score
	);
};

const JioCloudPc = () => {
	const [data, setData] = useState(sortByScore(TeamData, "desc"));
	const [activeSort, setActiveSort] = useState("High");
	const todayBirthday = getTodaysBirthdays(TeamData);
	const upcomingBirthday = getUpcomingBirthdaysThisMonth(TeamData);
	console.log({ upcomingBirthday });

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
			{/* Sidebar */}
			<Sidebar />

			{/* Team List */}
			<section className="w-full bg-gray-100 text-gray-800 overflow-y-scroll pb-44 mb-12 px-10">
				<div className="container w-full flex flex-col items-center justify-center  mx-auto space-y-8 py-6">
					<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
						Our Team
					</h1>
					<p className="max-w-2xl text-center dark:text-gray-600">
						As we continue working towards our goals, I want to take a moment to
						acknowledge the incredible dedication, creativity, and energy each
						of you brings to the table. We’ve faced challenges, overcome
						obstacles, and learned along the way—together.
					</p>
					<div className="flex flex-row justify-center gap-8 w-full">
						<div className="flex flex-col justify-center  text-center w-48">
							<img
								alt=""
								className="self-center flex-shrink-0 w-32 h-32  bg-center bg-cover rounded-full dark:bg-gray-500"
								src="/images/profile/rb.jpg"
							/>
							<p className="text-xl font-semibold leading-tight">
								Rahul Bhandari
							</p>
							<sub className="text-sm">Program Manager</sub>
						</div>
					</div>
					<div className="w-full grid grid-cols-4 gap-8">
						{data.map((user, index) => {
							return <CustomCard key={index} user={user} />;
						})}
					</div>
				</div>
			</section>

			{/* Sorting Bar */}
			<section className="w-1/4   bg-contain shadow-lg">
				<div className="px-4">
					<h3 className="font-semibold text-xl mt-6 mb-2 ">Sort By</h3>
					<ul className="space-y-4 py-4">
						<li
							className="flex gap-2 py-2 px-4 items-center rounded-md  shadow-lg cursor-pointer"
							style={{
								backgroundColor: activeSort === "Name" ? "#1e40af" : "",
								color: activeSort === "Name" ? "white" : "",
							}}
							onClick={handleSortByName}>
							<AiOutlineSortAscending size={25} />
							Name
						</li>
						<li
							className="flex gap-2 py-2 px-4 items-center rounded-md bg-gray-200 shadow-lg cursor-pointer"
							style={{
								backgroundColor: activeSort === "High" ? "#1e40af" : "",
								color: activeSort === "High" ? "white" : "",
							}}
							onClick={handleSortByScoreDesc}>
							<TbSortDescending size={25} />
							High to Low
						</li>
						<li
							className="flex gap-2 py-2 px-4 items-center rounded-md bg-gray-200 shadow-lg cursor-pointer"
							style={{
								backgroundColor: activeSort === "Low" ? "#1e40af" : "",
								color: activeSort === "Low" ? "white" : "",
							}}
							onClick={handleSortByScoreAsc}>
							<TbSortAscending size={25} />
							Low to High
						</li>
					</ul>
				</div>
				{/* Birthday Event */}
				<div className="px-4">
					<h3 className="font-semibold text-xl mt-6 mb-2 ">Birthday Events</h3>
					<h4 className="font-normal text-lg mt-2 mb-2 border-b-[1px] border-gray-300">
						Today ({todayBirthday.length})
					</h4>
					<div className="Birthday max-h-[135px] overflow-y-scroll pb-4 h-fit">
						{todayBirthday.length !== 0 ? (
							todayBirthday.map((btd, index) => (
								<div key={index} className="flex mt-2">
									<img
										src={`/images/members/${btd.Domain}.jpg`}
										alt="member"
										width={50}
										className="rounded-full h-14"
									/>
									<div className="my-auto w-full pl-2">
										<p className="font-semibold text-sm">{btd.Name}</p>
										<p className="font-light text-sm">{btd.DOB}</p>
									</div>
								</div>
							))
						) : (
							<p className="font-light">No Birthday Events Today</p>
						)}
					</div>
					<h4 className="font-normal text-lg mb-2 border-b-[1px] border-gray-300 mt-2">
						Upcoming ({upcomingBirthday.length})
					</h4>
					<div className="Birthday h-fit max-h-[135px] overflow-y-scroll pb-4">
						{upcomingBirthday.length !== 0 ? (
							upcomingBirthday.map((btd, index) => (
								<div className="flex mt-2" key={index}>
									<img
										src={`/images/members/${btd.Domain}.jpg`}
										alt="member"
										width={50}
										className="rounded-full h-14"
									/>
									<div className="my-auto w-full pl-2">
										<p className="font-semibold text-sm">{btd.Name}</p>
										<p className="font-light text-sm">{btd.DOB}</p>
									</div>
								</div>
							))
						) : (
							<p className="font-light">No Upcoming Events Today</p>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default JioCloudPc;
