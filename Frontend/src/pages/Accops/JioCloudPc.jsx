import { CustomCard } from "../../components/CustomCard";
import Sidebar from "../../components/Sidebar";
import data from "../../db.json";

const JioCloudPc = () => {
  return (
    <div className="flex h-screen w-full flex-1 bg-white">
      {/* Sidebar */}
      <Sidebar />

      <div className="mt-28 w-full mx-auto  flex px-11  justify-between">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};

export default JioCloudPc;
