import { CustomCard } from "../../components/CustomCard";
import Sidebar from "../../components/Sidebar";
import data from "../../db.json";

const JioCloudPc = () => {
	return (
		<div className="flex h-screen w-full flex-1 bg-gray-100">
			{/* Sidebar */}
			<Sidebar />

      <div className=" w-full pt-20 border-2 border-black mx-auto  overflow-y-scroll grid grid-cols-4 px-11  ">
        {data.map((user, index) => {
          return <CustomCard key={index} user={user} />;
        })}
        <CustomCard />
      </div>
    </div>
  );
};

export default JioCloudPc;
