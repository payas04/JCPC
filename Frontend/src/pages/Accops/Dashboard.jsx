import CustomPieChart from "../../components/CustomPieChart";
import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import { Users, Bug, BugOff, Star } from "lucide-react";
import JioPcObservation from "./JioPcObservation";
import AreaChart from "../../components/charts/AreaGraph";
import Typewriter from "typewriter-effect";
const Dashboard = () => {
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
          <div className="flex space-x-4 items-center">
            <img
              className="w-20 h-20 rounded-full"
              src="/images/avtar.png"
              alt="Profile"
            />
          </div>
        </header>

        {/* Project Overview Section */}
        <div className=" bg-white mb-4 p-6 rounded-md flex gap-10">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-[64%]">
            <StatCard
              title="Total Issues"
              value="277"
              color="bg-emerald-500"
              icon={BugOff}
              shouldOpenModal={true}
            />
            <StatCard
              title="Open Issues"
              value="338"
              color="bg-purple-500"
              icon={Bug}
              shouldOpenModal={true}
            />
            <StatCard
              title="Total Members"
              value="90"
              color="bg-sky-500"
              icon={Users}
            />
            <StatCard
              title="Total Reviews"
              value="166"
              color="bg-amber-500"
              icon={Star}
            />
          </div>
          <div className="md:row-span-2 w-[36%] my-auto">
            <div className="mb-4 pl-20 font-bold text-2xl  text-black ">
              ISSUE CHART
            </div>
            <CustomPieChart />
          </div>
        </div>

        {/* Tasks Activity Table */}

        <section className="bg-white text-black mb-4 p-6 rounded-lg flex gap-10">
          <JioPcObservation title="JioPC" />
          <AreaChart title="Issues Raised (May 2024 - Present)" />
        </section>
        <section className="bg-white text-black mb-4 p-6 rounded-lg flex gap-10">
          <JioPcObservation title="HP Chromebook" />
          <AreaChart title="Issues Raised (May 2024 - Present)" />
        </section>
        <section className="bg-white text-black mb-4 p-6 rounded-lg flex gap-10">
          <JioPcObservation title="Lenovo Chromebook" />
          <AreaChart title="Issues Raised (May 2024 - Present)" />
        </section>
        <section className="bg-white text-black mb-4 p-6 rounded-lg flex gap-10"></section>
      </main>
    </div>
  );
};

export default Dashboard;
