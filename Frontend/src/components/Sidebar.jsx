import { MdSpaceDashboard } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { useAuth } from "../context/auth";

const Sidebar = () => {
	const { user } = useAuth();
	const isAdmin = user?.isAdmin;
	return (
		<aside className="w-1/7 min-w-52 bg-blue-800 text-white pt-12  flex flex-col justify-between m-2 rounded-lg mb-14">
			<div>
				<div className="text-2xl font-bold mb-8 px-3 py-2 text-center">
					JioCloud PC
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
							url="/accops/Activities"
							title="Extra Activities"
							location={location}
							Icon={<FaTasks />}
						/>
						<Li
							url="/accops/jiocloudpc"
							title="Team"
							location={location}
							Icon={<RiTeamFill />}
						/>
						{isAdmin ? (
							<Li
								url="/accops/admin"
								title="Admin"
								location={location}
								Icon={<MdAdminPanelSettings />}
							/>
						) : (
							<Li
								url="/accops/profile"
								title="Profile"
								location={location}
								Icon={<CgProfile />}
							/>
						)}
					</ul>
				</nav>
			</div>
		</aside>
	);
};

const Li = ({ url, title, Icon, location }) => {
	const navigate = useNavigate();
	return (
		<li
			style={{
				backgroundColor: location.pathname.includes(url) ? "#f3f4f6" : "",
				padding: "5px 12px",
			}}
			className="hover:bg-blue-950 cursor-pointer rounded-xl mx-4"
			onClick={() => {
				navigate(`${url}`);
			}}>
			<span
				className="text-lg font-medium flex items-center gap-2"
				style={{
					color: location.pathname.includes(url) ? "#1e1926" : "white",
				}}>
				{Icon}
				{title}
			</span>
		</li>
	);
};

export default Sidebar;
