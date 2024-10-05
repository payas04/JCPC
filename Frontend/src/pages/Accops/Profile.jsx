import Sidebar from "../../components/Sidebar";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import {
	Briefcase,
	Mail,
	Linkedin,
	Twitter,
	Calendar,
	Award,
	Lightbulb,
	Target,
} from "lucide-react";
const Profile = () => {
	return (
		<div className="flex h-screen bg-gray-100 mb-3">
			{/* Sidebar */}
			<Sidebar />

			<div className="w-full bg-[url('/twinImage.jpg')] bg-cover m-2 rounded-lg mb-14 overflow-y-auto">
				<div className="w-1/2 h-full bg-white bg-opacity-70 rounded-lg overflow-y-auto">
					<div className="px-16 py-12 flex flex-col gap-12">
						<img
							src="/images/profile/rb.jpg"
							alt=""
							height={250}
							width={250}
							className="rounded-full"
						/>
						<div className="my-4">
							<h1 className="font-bold text-5xl ">Rahul Bhandari</h1>

							<div className="grid grid-cols-3 gap-2 mt-4">
								<span className="bg-blue-200 hover:bg-blue-500 hover:text-white text-sm rounded-full py-1 text-center">
									Program Manager
								</span>
								<span className="bg-blue-200 hover:bg-blue-500 hover:text-white text-sm rounded-full py-1 text-center">
									People Manager
								</span>
								<span className="bg-blue-200 hover:bg-blue-500 hover:text-white text-sm rounded-full py-1 text-center">
									Asset Manager
								</span>
								<span className="bg-blue-200 hover:bg-blue-500 hover:text-white text-sm rounded-full py-1 text-center">
									Recruiter
								</span>
								<span className="bg-blue-200 hover:bg-blue-500 hover:text-white text-sm rounded-full py-1 text-center">
									Team Lead
								</span>
							</div>
						</div>

						<p className="font-semibold  text-lg">
							I have led UAT projects and recruitment for Jio's GET program,
							currently managing a team of 90 professionals to ensure quality
							across key products. I am also dedicated to social causes,
							reflecting my commitment to positive societal impact.
						</p>
						<div className="flex gap-4">
							<a
								href="https://www.linkedin.com/in/rb05/"
								target="_blank"
								rel="noopener noreferrer">
								<FaLinkedin size={30} className="hover:text-blue-500" />
							</a>
							<a
								href="https://www.instagram.com/_bhandariji_/?hl=en"
								target="_blank"
								rel="noopener noreferrer">
								<BsInstagram size={30} className="hover:text-[#E1306C]" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
