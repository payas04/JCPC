import { CustomCard } from "../../components/CustomCard";
import Sidebar from "../../components/Sidebar";
import data from "../../db.json";

const JioCloudPc = () => {
  return (
    <div className="flex h-screen w-full flex-1 bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* <div className="mt-10 w-full flex">
        <div className="card mx-auto mt-40 w-72 border rounded-sm flex-col flex items-center border-black bg-white shadow-xl hover:shadow">
          <img
            className="mx-auto -mt-28 w-32 rounded-full border-8 border-white"
            src="https://avatars.githubusercontent.com/u/67946056?v=4"
            alt
          />
          <div className="mt-2 text-center text-3xl font-medium">Ajo Alex</div>
          <div className="mt-2 text-center text-sm font-light">@devpenzil</div>
          <div className="text-center text-lg font-normal">Kerala</div>
          <div className="mt-2 px-3 text-center text-sm font-light">
            <p>
              Front end Developer, avid reader. Love to take a long walk, swim
            </p>
          </div>
        </div>
      </div> */}
      <CustomCard />
    </div>
  );
};

export default JioCloudPc;
