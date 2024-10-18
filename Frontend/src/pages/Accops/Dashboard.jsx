import CustomPieChart from "../../components/charts/CustomPieChart";
import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import { AiOutlineIssuesClose } from "react-icons/ai";
import TeamData from "../../TeamData.json";
import { Users, Bug, BugOff, Star } from "lucide-react";
import JioPcObservation from "./JioPcObservation";
import AreaChart from "../../components/charts/AreaGraph";
import Typewriter from "typewriter-effect";
import {
	issuePieChart,
	openIssuePieChart,
	totalIssuePieChart,
	jioPcWorkItems,
	hpWorkItems,
	jioPcAreaChartData,
	hpAreaChartData,
} from "../../db/data";
import { useNavigate } from "react-router-dom";
import JCPCProduct from "../../components/JCPCProduct";

const Dashboard = () => {
	const navigate = useNavigate();

	return (
		<div className="flex h-screen bg-gray-100 text-black">
			{/* Sidebar */}
			<Sidebar />

			{/* Main Content */}
			<main className="flex-1 p-6 pt-12 overflow-y-auto mb-8">
				{/* Header */}
				<header className="flex justify-between items-center bg-white rounded-md mb-4 px-6">
					<div>
						<h1 className="text-4xl font-bold text-black">
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.typeString("Welcome, Rahul Bhandari")
										.pauseFor(2500)
										.start();
								}}
							/>
						</h1>
					</div>

					<img
						className="w-14 h-14 rounded-full"
						src="/images/profile/rb.jpg"
						alt="Profile"
						onClick={() => {
							navigate("/accops/profile");
						}}
					/>
				</header>

				{/* Project Overview Section */}
				<div className=" bg-white mb-4 p-6 rounded-md flex gap-10">
					<div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-[64%]">
						<StatCard
							title="Total Bugs and Enhancements"
							value={totalIssuePieChart.reduce(
								(acc, item) => acc + item.value,
								0
							)}
							color="bg-emerald-100"
							textColor="text-emerald-800"
							icon={AiOutlineIssuesClose}
							pieData={totalIssuePieChart}
							shouldOpenModal={true}
						/>
						<StatCard
							title="Open Issues"
							value={openIssuePieChart.reduce(
								(acc, item) => acc + item.value,
								0
							)}
							color="bg-amber-100"
							textColor="text-amber-800"
							icon={Bug}
							pieData={openIssuePieChart}
							shouldOpenModal={true}
						/>
						<StatCard
							title="Total Members"
							value={TeamData.length}
							color="bg-purple-100"
							textColor="text-purple-800"
							icon={Users}
						/>

						{/* JCPC productss */}
						<JCPCProduct />
					</div>
					<div className="md:row-span-2 w-[36%]">
						<div className="mb-4 font-semibold text-xl flex items-center justify-center text-black ">
							Total Issues Raised (23th Aug - 15th Oct)
						</div>
						<div className="w-full flex items-center justify-center">
							<CustomPieChart data={issuePieChart} radiusValue={30} />
						</div>
					</div>
				</div>

				{/* Tasks Activity Table */}

				<section className="bg-white text-black mb-4 p-6 rounded-lg flex gap-10 ">
					<JioPcObservation title="JioPC" workItems={jioPcWorkItems} />
					<AreaChart
						title="Issues Raised (23th Aug - 15th Oct)"
						areaChartData={jioPcAreaChartData}
					/>
				</section>
				<section className="bg-white text-black mb-4 p-6 rounded-lg flex gap-10 ">
					<JioPcObservation title="HP Chromebook" workItems={hpWorkItems} />
					<AreaChart
						title="Issues Raised (23th Aug - 15th Oct)"
						areaChartData={hpAreaChartData}
					/>
				</section>
			</main>
		</div>
	);
};

export default Dashboard;
