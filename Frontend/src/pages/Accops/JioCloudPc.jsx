import { Card } from "../../components/Card";
import { CustomCard } from "../../components/CustomCard";
import Sidebar from "../../components/Sidebar";

const JioCloudPc = () => {
  return (
    <div className="flex h-screen w-full flex-1">
      {/* Sidebar */}
      <Sidebar />

      <div className="mt-10 w-full flex justify-center">
        <Card />
        <CustomCard />
      </div>
    </div>
  );
};

export default JioCloudPc;
