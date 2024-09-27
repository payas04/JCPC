import { CustomCard } from "../../components/CustomCard";
import Sidebar from "../../components/Sidebar";
import data from "../../db.json";

const JioCloudPc = () => {
	return (
		<div className="flex h-screen w-full flex-1 bg-gray-100">
			{/* Sidebar */}
			<Sidebar />

			<section className="py-6  w-full dark:bg-gray-100 dark:text-gray-800 overflow-y-scroll">
				<div className="container w-full flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
					<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
					<p className="max-w-2xl text-center dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
					<div className="flex flex-row justify-center gap-8 w-full">
						<div className="flex flex-col justify-center m-8 text-center w-48">
							<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
							<p className="text-xl font-semibold leading-tight">Rahul Bhandari</p>
							<p className="dark:text-gray-600">Programme Manager</p>
						</div>
						
						{/* <div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-600">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-600">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-600">Visual Designer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
				<p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
				<p className="dark:text-gray-600">Visual Designer</p>
			</div> */}
					</div>
					<div className="w-full flex flex-wrap justify-between">
							{data.map((user, index) => {
								return <CustomCard key={index} user={user} />;
							})}
						</div>
				</div>
			</section>
			{/* <div className=" w-full pt-20 mx-auto  overflow-y-scroll grid grid-cols-4 px-11 pb-56">
				{data.map((user, index) => {
					return <CustomCard key={index} user={user} />;
				})}
			</div> */}
		</div>
	);
};

export default JioCloudPc;
