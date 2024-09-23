import CustomPieChart from "../../components/CustomPieChart";

import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import { Users, ShoppingCart, Package, Star } from "lucide-react";
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
              increase="95%"
              color="bg-emerald-500"
              icon={Users}
            />
            <StatCard
              title="Total Orders"
              value="338"
              increase="30%"
              color="bg-purple-500"
              icon={ShoppingCart}
            />
            <div className="md:row-span-2">
              <div className="mb-4  pl-5 font-bold text-2xl text-black ">
                ISSUE CHART
              </div>
              <CustomPieChart />
            </div>
            <StatCard
              title="Total Products"
              value="557"
              increase="25%"
              color="bg-sky-500"
              icon={Package}
            />
            <StatCard
              title="Total Reviews"
              value="166"
              increase="45%"
              color="bg-amber-500"
              icon={Star}
            />
          </div>
        </div>

        {/* Tasks Activity Table */}
        <section className="bg-white text-black p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Tasks Activity</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-white text-black">
                <tr>
                  <th className="p-2">Assigned to</th>
                  <th className="p-2">Deadline</th>
                  <th className="p-2">Task</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Project</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Juan M.</td>
                  <td className="p-2">May 16th, 2023</td>
                  <td className="p-2">Establish and maintain design...</td>
                  <td className="p-2 text-yellow-400">In Progress</td>
                  <td className="p-2">Crimson Studio</td>
                  <td className="p-2">
                    <button className="bg-teal-500 p-1 rounded">
                      See Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
