import { MdSpaceDashboard } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-1/7 min-w-40 bg-blue-800 text-white p-8 pt-12  flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold mb-8">JioCloudPC</div>
        <nav>
          <ul className="space-y-4">
            <Li
              url="/accops/dashboard"
              title="Dashboard"
              location={location}
              Icon={<MdSpaceDashboard />}
            />
            <Li
              url="/accops/jiocloudpc"
              title="JioCloud"
              location={location}
              Icon={<FaCloud />}
            />
            <Li
              url="/accops/profile"
              title="Profile"
              location={location}
              Icon={<CgProfile />}
            />
            <Li
              url="/accops/settings"
              title="Settings"
              location={location}
              Icon={<IoSettings />}
            />
          </ul>
        </nav>
      </div>

      {/* Teams */}
      {/* <div>
        <h2 className="text-gray-500 text-sm mb-4">TEAMS</h2>
        <ul className="space-y-2">
          <li className="text-sm flex items-center space-x-2">
            <span className="text-purple-500">●</span>
            <span>Sales</span>
          </li>
          <li className="text-sm flex items-center space-x-2">
            <span className="text-orange-500">●</span>
            <span>Marketing</span>
          </li>
          <li className="text-sm flex items-center space-x-2">
            <span>➕</span>
            <span>Add project</span>
          </li>
        </ul>
      </div> */}
    </aside>
  );
};

const Li = ({ url, title, Icon, location }) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "",
    }}
  >
    <Link
      className="text-lg font-medium flex items-center gap-2 text-teal-400"
      to={url}
      style={{
        color: location.pathname.includes(url) ? "yellow" : "black",
      }}
    >
      {Icon}
      {title}
    </Link>
  </li>
);

export default Sidebar;
