import Sidebar from "../components/Sidebar";
import { Crown } from "lucide-react";

const leaderboardData = [
  {
    rank: 1,
    name: "Eiden",
    score: 2430,
    username: "@username",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    rank: 2,
    name: "Jackson",
    score: 1847,
    username: "@username",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    rank: 3,
    name: "Emma Aria",
    score: 1674,
    username: "@username",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

const JioCloudPc = () => {
  return (
    <div className="flex h-screen w-full flex-1 bg-gradient-to-r from-orange-100 to-blue-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="mt-10 w-full flex justify-center">
        <div className="flex flex-col items-center w-full ">
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-3xl">
            {leaderboardData.map((entry) => (
              <div
                key={entry.rank}
                className={`relative flex flex-col items-center p-4 rounded-lg ${
                  entry.rank === 1
                    ? "order-2 w-full bg-[#FABC3F]"
                    : entry.rank === 2
                    ? "order-3 w-full sm:w-[calc(50%-0.5rem)] bg-[#B7B7B7]"
                    : "order-3 w-full sm:w-[calc(50%-0.5rem)] bg-[#B17457]"
                }  text-white`}
              >
                {entry.rank === 1 && (
                  <Crown className="absolute   top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-yellow-500" />
                )}
                <div
                  className={`relative w-20 h-20 mb-2 rounded-full overflow-hidden ${getBackgroundColor(
                    entry.rank
                  )}`}
                >
                  {/* image */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full  flex items-center justify-center text-xs font-bold">
                    {entry.rank}
                  </div>
                </div>
                <h2 className="text-xl font-bold">{entry.name}</h2>
                <p className="text-3xl font-bold mb-1">{entry.score}</p>
                <p className="text-sm text-gray-400">{entry.username}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const getBackgroundColor = (rank) => {
  switch (rank) {
    case 1:
      return "bg-yellow-500";
    case 2:
      return "bg-blue-500";
    case 3:
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

export default JioCloudPc;
