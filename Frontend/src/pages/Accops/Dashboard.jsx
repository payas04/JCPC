import CustomPieChart from "../../components/charts/CustomPieChart";
import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
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
  lenovoWorkItems,
  jioPcAreaChartData,
  hpAreaChartData,
  lenovoAreaChartData,
} from "../../db/data";
import { useNavigate } from "react-router-dom";
import JCPCProduct from "../../components/JCPCProduct";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100 text-black ">
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
            <p className="text-lg text-gray-400 my-2">
              Track your team progress here
            </p>
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
              title="Total Issues"
              value="277"
              color="bg-emerald-500"
              icon={BugOff}
              pieData={totalIssuePieChart}
              shouldOpenModal={true}
            />
            <StatCard
              title="Open Issues"
              value="338"
              color="bg-purple-500"
              icon={Bug}
              pieData={openIssuePieChart}
              shouldOpenModal={true}
            />
            <StatCard
              title="Total Members"
              value="90"
              color="bg-sky-500"
              icon={Users}
            />

            {/* JCPC productss */}
            <JCPCProduct />
          </div>
          <div className="md:row-span-2 w-[36%] my-auto">
            <div className="mb-4 font-bold text-2xl flex items-center justify-center text-black ">
              Total Issues Raised
            </div>
            <CustomPieChart data={issuePieChart} />
          </div>
        </div>

        {/* Tasks Activity Table */}

        <section className="bg-white text-black mb-4 p-6 rounded-lg flex gap-10">
          <JioPcObservation title="JioPC" workItems={jioPcWorkItems} />
          <AreaChart
            title="Issues Raised (May 2024 - Present)"
            areaChartData={jioPcAreaChartData}
          />
        </section>
        <section className="bg-white text-black mb-4 p-6 rounded-lg flex gap-10">
          <JioPcObservation title="HP Chromebook" workItems={hpWorkItems} />
          <AreaChart
            title="Issues Raised (May 2024 - Present)"
            areaChartData={hpAreaChartData}
          />
        </section>
        <section className="bg-white text-black mb-4 p-6 rounded-lg flex gap-10">
          <JioPcObservation
            title="Lenovo Chromebook"
            workItems={lenovoWorkItems}
          />
          <AreaChart
            title="Issues Raised (May 2024 - Present)"
            areaChartData={lenovoAreaChartData}
          />
        </section>
        <section className="bg-white text-black mb-4 p-6 rounded-lg flex gap-10"></section>
      </main>
    </div>
  );
};

export default Dashboard;
