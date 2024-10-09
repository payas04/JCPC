import { IoClose } from "react-icons/io5";
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import "../../styles/activities.css";

const OsResearch = ({ open, setOpen }) => {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto ">
				<div className="flex items-center justify-center text-center h-screen w-screen">
					<DialogPanel className="relative w-[60%] h-[85%] overflow-scroll rounded-lg bg-white text-left shadow-xl transition-all mb-6">
						<div className="sticky top-0 left-0 w-full bg-white z-20">
							<IoClose
								onClick={() => setOpen(false)}
								color="black"
								size={26}
								className="absolute top-2 right-2 hover:bg-red-500 hover:rounded-full p-1 cursor-pointer"
							/>
							<h2 className="font-bold text-4xl text-center py-2">
								OS Research
							</h2>
						</div>

						<div className="mt-3 text-center flex flex-col items-center gap-6">
							<img
								src="/images/extra/OS_Image.png"
								alt="OS Research Image"
								className="object-contain w-full"
								loading="lazy"
							/>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default OsResearch;
