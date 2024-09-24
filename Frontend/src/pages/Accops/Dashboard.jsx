import CustomPieChart from "../../components/CustomPieChart";
import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import { Users, Bug, BugOff, Star } from "lucide-react";
import JioPcObservation from "./JioPcObservation";
const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 text-black ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 pt-12 overflow-y-auto mb-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-black">
              Welcome, Rahul Bhandhari
            </h1>
            <p className="text-gray-400">
              Track your projects, tasks & team activity here
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="bg-gray-700 p-2 rounded-full">🔍</button>
            <button className="bg-gray-700 p-2 rounded-full">📅</button>
            <img
              className="w-10 h-10 rounded-full"
              src="https://via.placeholder.com/40"
              alt="Profile"
            />
          </div>
        </header>

        {/* Project Overview Section */}
        <div className="p-6 bg-gray-100 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <div className="md:row-span-2">
              <div className="mb-4 font-bold text-2xl flex items-center justify-center text-black ">
                ISSUE CHART
              </div>
              <CustomPieChart />
            </div>
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
        </div>

        {/* Tasks Activity Table */}
        <section className="bg-white text-black p-6 rounded-lg">
          <JioPcObservation />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
