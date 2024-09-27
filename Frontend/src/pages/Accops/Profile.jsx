import Sidebar from "../../components/Sidebar";

const Profile = () => {
  return (
    <div className="flex h-screen bg-[#f3f4f6] mb-3">
      {/* Sidebar */}
      <Sidebar />

      <div className="w-full bg-[url('/twinImage.jpg')] bg-cover m-2 rounded-lg mb-14 ">
        <div className="w-1/2 h-full bg-white bg-opacity-70">
          <div className="px-24 pt-16">
            <img
              src="/images/Binit.jpg"
              alt=""
              height={250}
              width={250}
              className="rounded-full mb-5"
            />
            <h1 className="font-bold text-3xl mb-5">Binit Kumar</h1>
            <p className="font-normal text-lg mb-5">
              Binit is a Chief Tester Officer
            </p>
            <p className="font-normal text-sm">
              Eager to leverage my technical skills and collaborative mindset to
              dive into new projects and work with great teams Eager to leverage
              my technical skills and collaborative mindset to dive into new
              projects and work with great teams
            </p>
            <div className="flex space-x-2 mt-2">
              <span className="bg-gray-300 px-3 py-1  text-sm rounded-full min-w-max">
                Program Manager
              </span>
              <span className="bg-gray-300 px-3 py-1 text-sm rounded-full min-w-max">
                People Manager
              </span>
              <span className="bg-gray-300 px-3 py-1 text-sm rounded-full min-w-max">
                Asset Manager
              </span>
            </div>
              <div className="flex space-x-2 mt-2  ">
                <span className="bg-gray-300 px-3 py-1 text-sm rounded-full min-w-max">
                  Recruiter
                </span>
                <span className="bg-gray-300 px-3 py-1 text-sm rounded-full min-w-max">
                  Team Lead
                </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
