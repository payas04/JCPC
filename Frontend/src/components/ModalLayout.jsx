import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { IoClose } from "react-icons/io5";

const ModalLayout = ({ children, open, setOpen, width }) => {
	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			className="relative z-10">
			<DialogBackdrop className="modalBackdrop" />

			<div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto ">
				<div className="flex items-center justify-center text-center h-screen w-screen">
					<DialogPanel className={`modalPanel w-[${width}]`}>
						<div className="absolute right-4 top-4 flex justify-end cursor-pointer z-10">
							<IoClose
								onClick={() => {
									setOpen(false);
									console.log("close clicked");
								}}
								color="black"
								size={18}
								className="hover:bg-red-500 hover:rounded-full"
							/>
						</div>
						{children}
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
};

export default ModalLayout;
