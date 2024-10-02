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

			{/* <div className="w-full bg-[url('/twinImage.jpg')] bg-cover m-2 rounded-lg mb-14 overflow-y-auto">
        <div className="w-1/2 h-full bg-white bg-opacity-70 rounded-lg overflow-y-auto">
          <div className="px-16 py-12 flex flex-col gap-12">
            <img
              src="/images/rb_image.jpg"
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
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} className="hover:text-blue-500" />
              </a>
              <a
                href="https://www.instagram.com/_bhandariji_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram size={30} className="hover:text-[#E1306C]" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
			<div className="min-h-screen bg-gradient-to-b p-5 from-blue-50 to-white">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col lg:flex-row lg:space-x-6">
						{/* Left Column */}
						<div className="lg:w-2/3">
							{/* Hero Section */}
							<section className="flex items-center mb-6">
								<img
									src="/images/profile/rb.jpg"
									alt="Project Manager"
									className="rounded-full mr-4 border-2 border-blue-500 shadow-md"
									width={100}
									height={100}
								/>
								<div>
									<h1 className="text-2xl font-bold text-gray-800 mb-1">
										Rahul Bhandari
									</h1>
									<p className="text-lg text-gray-600 mb-1">
										Senior Program Manager
									</p>
									<p className="text-sm text-gray-700">
										Passionate leader driving innovation across multiple teams,
										focusing on high-impact projects and fostering
										collaboration.
									</p>
								</div>
							</section>

							{/* Teams Section */}
							<section className="mb-6">
								<h2 className="text-xl font-semibold text-gray-800 mb-3">
									Teams Under Management
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
									{["JPMA", "JCPC", " AI Bot & Asset Management"].map(
										(team) => (
											<div
												key={team}
												className="bg-white rounded-lg shadow-sm p-3 border-2 border-gray-200 text-center hover:shadow-md transition-shadow">
												<Briefcase className="w-6 h-6 text-blue-500 mx-auto mb-2" />
												<h3 className="text-base font-semibold text-gray-800 mb-1">
													{team}
												</h3>
												<p className="text-xs text-gray-600">
													Leading professionals to deliver exceptional results.
												</p>
											</div>
										)
									)}
								</div>
							</section>

							{/* Background Section */}
							<section className="mb-6">
								<h2 className="text-xl font-semibold text-gray-800 mb-3">
									Background & Achievements
								</h2>
								<div className="bg-white rounded-lg shadow-sm p-3">
									<ul className="space-y-2">
										<li className="flex items-start">
											<div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 mt-0.5 text-xs">
												1
											</div>
											<p className="text-sm text-gray-700">
												Over 10 years of experience in project management across
												various industries.
											</p>
										</li>
										<li className="flex items-start">
											<div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 mt-0.5 text-xs">
												2
											</div>
											<p className="text-sm text-gray-700">
												Successfully delivered 50+ projects, consistently
												meeting or exceeding expectations.
											</p>
										</li>
										<li className="flex items-start">
											<div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2 mt-0.5 text-xs">
												3
											</div>
											<p className="text-sm text-gray-700">
												Certified PMP® with a track record of implementing best
												practices and driving continuous improvement.
											</p>
										</li>
									</ul>
								</div>
							</section>

							{/* Contact Section */}
							<section>
								<h2 className="text-xl font-semibold text-gray-800 mb-3">
									Contact Info
								</h2>
								<div className="flex space-x-4">
									<a
										href="mailto:john.doe@example.com"
										className="text-blue-500 hover:text-blue-600 transition-colors">
										<Mail className="w-5 h-5" />
									</a>
									<a
										href="https://linkedin.com/in/johndoe"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-500 hover:text-blue-600 transition-colors">
										<Linkedin className="w-5 h-5" />
									</a>
									<a
										href="https://twitter.com/johndoe"
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-500 hover:text-blue-600 transition-colors">
										<Twitter className="w-5 h-5" />
									</a>
								</div>
							</section>
						</div>

						{/* Right Column - Timeline */}
						<div className="lg:w-1/3 mt-6 lg:mt-0">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">
								Career Timeline
							</h2>
							<div className="relative">
								<div className="absolute left-2 top-0 h-full w-0.5 bg-blue-200"></div>
								{[
									{
										year: "2022",
										title: "Senior Project Manager",
										description:
											"Led cross-functional teams in delivering enterprise-scale projects.",
										icon: Target,
									},
									{
										year: "2019",
										title: "Project Manager",
										description:
											"Managed multiple high-impact projects across various departments.",
										icon: Lightbulb,
									},
									{
										year: "2016",
										title: "Associate Project Manager",
										description:
											"Assisted in the planning and execution of key company initiatives.",
										icon: Award,
									},
									{
										year: "2014",
										title: "Project Coordinator",
										description:
											"Supported project teams and helped streamline project processes.",
										icon: Calendar,
									},
								].map((item, index) => (
									<div key={index} className="relative z-10 mb-4 ml-6">
										<div className="flex items-center mb-1">
											<div className="absolute -left-7 bg-blue-500 rounded-full p-1 flex-shrink-0">
												<item.icon className="w-3 h-3 text-white" />
											</div>
											<div className="text-sm font-semibold text-blue-500">
												{item.year}
											</div>
										</div>
										<div className="bg-white rounded-lg shadow-sm p-2">
											<h3 className="text-sm font-semibold text-gray-800 mb-1">
												{item.title}
											</h3>
											<p className="text-xs text-gray-600">
												{item.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
