import { CustomCard } from "../../components/CustomCard";
import Sidebar from "../../components/Sidebar";
import data from "../../db.json";
import { LuArrowUpDown } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";

const JioCloudPc = () => {
	return (
		<div className="flex h-screen w-full flex-1 bg-gray-100">
			{/* Sidebar */}
			<Sidebar />

			<section className="py-6  w-full bg-gray-100 text-gray-800 overflow-y-scroll pb-52">
				<div className="container w-full flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
					<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
						Our team
					</h1>
					<p className="max-w-2xl text-center dark:text-gray-600">
						As we continue working towards our goals, I want to take a moment to
						acknowledge the incredible dedication, creativity, and energy each
						of you brings to the table. We’ve faced challenges, overcome
						obstacles, and learned along the way—together.
					</p>
					<div className="flex flex-row justify-center gap-8 w-full">
						<div className="flex flex-col justify-center  text-center w-48">
							<img
								alt=""
								className="self-center flex-shrink-0 w-32 h-32  bg-center bg-cover rounded-full dark:bg-gray-500"
								src="/images/rb_image.jpg"
							/>
							<p className="text-xl font-semibold leading-tight">
								Rahul Bhandari
							</p>
							<p className="dark:text-gray-600">Program Manager</p>
						</div>
					</div>
					<div className="w-full grid grid-cols-4 ">
						{data.map((user, index) => {
							return <CustomCard key={index} user={user} />;
						})}
					</div>
				</div>
			</section>
			<section className="w-1/4 bg-white shadow-lg">
				<div className="px-4">
					<h3 className="font-semibold text-xl mt-6 mb-2 ">Sort By</h3>
					<ul className="space-y-4 py-4">
						<li className="flex gap-2 py-2 px-4 items-center rounded-md bg-gray-100 shadow-lg">
							<LuArrowUpDown />
							Name
						</li>
						<li className="flex gap-2 py-2 px-4 items-center rounded-md bg-gray-100 shadow-lg">
							<TbUsers />
							Count
						</li>
						<li className="flex gap-2 py-2 px-4 items-center rounded-md bg-gray-100 shadow-lg">
							<FaRegStar />
							Rating
						</li>
					</ul>
				</div>
				<div className="px-4">
					<h3 className="font-semibold text-2xl mt-6 mb-2 ">Birthday Events</h3>
					<h4 className="font-normal text-lg mt-2 mb-2 border-b-[1px] border-gray-300">
						Today (2)
					</h4>
					<div className="Birthday max-h-[135px] overflow-y-scroll pb-4 h-fit">
						{/* <p className="font-light">No Birthday Events Today</p> */}
						<div className="flex mt-2">
							<img
								src="/images/Binit.jpg"
								alt="member"
								width={50}
								className="rounded-full h-14"
							/>
							<div className="my-auto w-full pl-2">
								<p className="font-semibold text-sm">Mr. Yuvraj Achrekar</p>
								<p className="font-light text-sm">1st January</p>
							</div>
						</div>
						<div className="flex mt-2">
							<img
								src="/images/Binit.jpg"
								alt="member"
								width={50}
								className="rounded-full h-14"
							/>
							<div className="my-auto w-full pl-2">
								<p className="font-semibold text-sm">Mr. Binit Sirsath</p>
								<p className="font-light text-sm">1st January</p>
							</div>
						</div>
						<div className="flex mt-2">
							<img
								src="/images/Binit.jpg"
								alt="member"
								width={50}
								className="rounded-full h-14"
							/>
							<div className="my-auto w-full pl-2">
								<p className="font-semibold text-sm">Mr. Binit Sirsath</p>
								<p className="font-light text-sm">1st January</p>
							</div>
						</div>
					</div>
					<h4 className="font-normal text-lg mb-2 border-b-[1px] border-gray-300 mt-2">
						Upcoming (4)
					</h4>
					<div className="Birthday h-fit max-h-[135px] overflow-y-scroll pb-4">
						{/* <p className="font-light">No Upcoming Events Today</p> */}
						<div className="flex mt-2">
							<img
								src="/images/Binit.jpg"
								alt="member"
								width={50}
								className="rounded-full h-14"
							/>
							<div className="my-auto w-full pl-2">
								<p className="font-semibold text-sm">Mr. Yuvraj Achrekar</p>
								<p className="font-light text-sm">1st January</p>
							</div>
						</div>
						<div className="flex mt-2">
							<img
								src="/images/Binit.jpg"
								alt="member"
								width={50}
								className="rounded-full h-14"
							/>
							<div className="my-auto w-full pl-2">
								<p className="font-semibold text-sm">Mr. Binit Sirsath</p>
								<p className="font-light text-sm">1st January</p>
							</div>
						</div>
						<div className="flex mt-2">
							<img
								src="/images/Binit.jpg"
								alt="member"
								width={50}
								className="rounded-full h-14"
							/>
							<div className="my-auto w-full pl-2">
								<p className="font-semibold text-sm">Mr. Sameep Vishwakarma</p>
								<p className="font-light text-sm">1st January</p>
							</div>
						</div>
						<div className="flex mt-2">
							<img
								src="/images/Binit.jpg"
								alt="member"
								width={50}
								className="rounded-full h-14"
							/>
							<div className="my-auto w-full pl-2">
								<p className="font-semibold text-sm">Mr. Sameep Vishwakarma</p>
								<p className="font-light text-sm">1st January</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default JioCloudPc;
