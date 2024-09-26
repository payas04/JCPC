import { MdSpaceDashboard } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";

const Sidebar = () => {
	return (
		<aside className="w-1/7 min-w-52 bg-blue-800 text-white pt-12  flex flex-col justify-between m-2 rounded-lg ">
			<div>
				<div className="text-2xl font-bold mb-8 px-3 py-2 text-center">
					JioCloudPC
				</div>
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
						<Li
							url="/accops/Activities"
							title="Extra Activities"
							location={location}
							Icon={<FaTasks />}
						/>
					</ul>
				</nav>
			</div>
		</aside>
	);
};

const Li = ({ url, title, Icon, location }) => (
	<li
		style={{
			backgroundColor: location.pathname.includes(url) ? "#f3f4f6" : "",
			padding: "5px 12px",
			borderTopLeftRadius: "50px",
			borderBottomLeftRadius: "50px",
			marginLeft: "20px",
		}}>
		<Link
			className="text-lg font-medium flex items-center gap-2 text-teal-400"
			to={url}
			style={{
				color: location.pathname.includes(url) ? "#1e1926" : "white",
			}}>
			{Icon}
			{title}
		</Link>
	</li>
);

export default Sidebar;
