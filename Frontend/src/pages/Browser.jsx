import React, { useState, useRef, useCallback } from "react";
import Draggable from "react-draggable";
import {
	ArrowLeft,
	ArrowRight,
	RefreshCw,
	Search,
	Star,
	MoreVertical,
	X,
} from "lucide-react";

const TitleBar = ({ toggleBrowser }) => (
	<div className="title-bar bg-gray-800 rounded-t-xl">
		<div className="text-white h-9 w-full flex justify-end select-none">
			<button
				className="hover:bg-red-600 w-12 h-full flex justify-center items-center text-xl transition-colors duration-200"
				onClick={toggleBrowser}>
				<X size={18} />
			</button>
		</div>
	</div>
);

const AddressBar = ({ url, setUrl }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		setUrl(url);
	};

	return (
		<div className="flex bg-gray-700 w-full h-12 border-gray-600 border-b mt-1 items-center px-2">
			<div className="flex space-x-2 mr-4">
				<button className="p-1 rounded-full hover:bg-gray-600 transition-colors duration-200">
					<ArrowLeft size={18} className="text-gray-400" />
				</button>
				<button className="p-1 rounded-full hover:bg-gray-600 transition-colors duration-200">
					<ArrowRight size={18} className="text-gray-400" />
				</button>
				<button className="p-1 rounded-full hover:bg-gray-600 transition-colors duration-200">
					<RefreshCw size={18} className="text-gray-400" />
				</button>
			</div>
			<form onSubmit={handleSubmit} className="flex-grow">
				<div className="relative">
					<input
						type="text"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						className="w-full py-1.5 px-10 rounded-full bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Search Google or type a URL"
					/>
					<Search
						size={18}
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
					/>
					<Star
						size={18}
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-yellow-400 transition-colors duration-200"
					/>
				</div>
			</form>
			<div className="flex items-center ml-4 space-x-2">
				<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
					R
				</div>
				<button className="p-1 rounded-full hover:bg-gray-600 transition-colors duration-200">
					<MoreVertical size={18} className="text-gray-400" />
				</button>
			</div>
		</div>
	);
};

export default function Browser({ isAppOpen, toggleBrowser, bounds }) {
	const explorerRef = useRef(null);
	// const homeUrl = "https://www.google.com/webhp?igu=1";
	const [url, setUrl] = useState("https://www.google.com/webhp?igu=1");

	const handleCloseBrowser = useCallback(() => {
		toggleBrowser();
	}, [toggleBrowser]);

	return (
		<div
			className={`${
				isAppOpen ? "" : "hidden"
			} z-30 w-full h-full    pointer-events-none absolute`}>
			<Draggable
				handle=".title-bar"
				nodeRef={explorerRef}
				bounds={bounds}
				defaultPosition={{ x: 200, y: 50 }}>
				<div
					ref={explorerRef}
					className="window bg-gray-800  w-[70.5rem] rounded-xl overflow-hidden border-gray-700 border shadow-2xl pointer-events-auto">
					<TitleBar toggleBrowser={handleCloseBrowser} />
					<div className="content h-[35rem] text-white select-none">
						<AddressBar url={url} setUrl={setUrl} />
						<div className="h-full ">
							<iframe
								src={url}
								className="w-full h-full"
								id="chrome-screen"
								title="Chrome URL"></iframe>
						</div>
					</div>
				</div>
			</Draggable>
		</div>
	);
}
