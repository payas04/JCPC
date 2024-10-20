import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import CustomPieChart from "./charts/CustomPieChart";
import { IoClose, IoDownloadSharp } from "react-icons/io5";

export default function CustomModal({
	open,
	setOpen,
	heading,
	pieData = [],
	totalIssues,
}) {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<DialogPanel className="relative w-[40%] min-w-[560px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ">
						<div className="absolute right-4 top-4 flex justify-end cursor-pointer">
							<IoClose
								onClick={() => setOpen(false)}
								color="black"
								size={18}
								className="hover:bg-red-500 hover:rounded-full "
							/>
						</div>

						<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
							<div className="mt-3 flex flex-col items-center gap-6">
								<DialogTitle
									as="h3"
									className="text-3xl font-semibold leading-6 text-gray-900 w-full">
									{heading}
									<p className="text-base font-normal mt-2">
										Distribution of issues by severity
									</p>
								</DialogTitle>
								<div className="grid grid-cols-2 gap-4 text-left w-full">
									<span className="bg-gray-100 text-gray-800 rounded-lg px-2 py-4">
										<p className="font-bold text-3xl">{totalIssues}</p>
										<p className="font-normal">Total Issues</p>
									</span>
									<span className="bg-red-100 text-red-800 rounded-lg px-2 py-4">
										<p className="font-bold text-3xl">1</p>
										<p className="font-normal">Blocker Issues</p>
									</span>
								</div>
								<div className="flex relative">
									<div className="">
										<CustomPieChart
											data={pieData}
											legend={"false"}
											radiusValue={60}
										/>
									</div>
									<div className="absolute space-y-4 -right-14 top-[8%] ">
										{pieData.map((item) => (
											<div
												key={item.id}
												className="flex justify-between items-center gap-4">
												<div className="flex items-center">
													<div
														className="w-7 h-7 mr-2 rounded-md"
														style={{ backgroundColor: item.color }}
													/>
													<span className="text-base font-medium">
														{item.label}
													</span>
												</div>
												<div className="flex gap-2">
													<span className="ml-auto text-base font-bold bg-gray-200 rounded-md px-1 text-gray-800">
														{item.value}
													</span>
													<span className="text-base text-muted-foreground">
														({((item.value / totalIssues) * 100).toFixed(1)}%)
													</span>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
