import { CustomCard } from "../../components/CustomCard";
import Sidebar from "../../components/Sidebar";
import data from "../../db.json";

const JioCloudPc = () => {
	return (
		<div className="flex h-screen w-full flex-1 bg-gray-100">
			{/* Sidebar */}
			<Sidebar />

			<section className="py-6  w-full dark:bg-gray-100 dark:text-gray-800 overflow-y-scroll pb-52">
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
			<section className="w-1/4 bg-red-300"></section>
		</div>
	);
};

export default JioCloudPc;
