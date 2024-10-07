import { useState } from "react";
import { SearchIcon } from "lucide-react";
import CustomCard from "./CustomCard";

const TeamSection = ({ data }) => {
	const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add search query state

	// Step 2: Filter the data based on the search query
	const filteredData = data.filter((user) =>
		user.Name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<section className="w-full bg-gray-100 text-gray-800 overflow-y-scroll pb-44 mb-12 px-10">
			<div className="container w-full flex flex-col mx-auto space-y-8 py-6">
				<div className="flex flex-row justify-between items-center mt-6 w-full">
					<div className="text-4xl font-bold  leading-none text-nowrap">
						Our Team
					</div>

					{/* Search bar */}
					<div className="flex items-center  w-6/12  text-white">
						<div className="relative w-full">
							<div className="absolute inset-y-0 start-0 text-white flex items-center ps-3 pointer-events-none">
								<SearchIcon className="text-black" />
							</div>
							<input
								type="text"
								id="voice-search"
								value={searchQuery} // Step 3: Bind input value to search query state
								onChange={(e) => setSearchQuery(e.target.value)} // Step 4: Update search query on input change
								className="bg-white text-black text-base rounded-lg placeholder:text-black block w-full ps-10 p-2.5 focus:outline focus:outline-blue-800"
								placeholder="Search incredible minds here..."
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-row items-center  gap-8 w-full">
					<div className="flex flex-col  text-center w-48">
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
					<div>
						<p className="max-w-2xl  dark:text-gray-600">
							As we continue working towards our goals, I want to take a moment
							to acknowledge the incredible dedication, creativity, and energy
							each of you brings to the table. <br></br>{" "}
							<div className="text-end mr-7">- Rahul Bhandari.</div>
						</p>
					</div>
				</div>
				<div className="w-full grid grid-cols-4 gap-8">
					{filteredData.length > 0 ? (
						filteredData.map((user, index) => {
							return <CustomCard key={index} user={user} />;
						})
					) : (
						<p className="text-center col-span-4">No Members found</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
