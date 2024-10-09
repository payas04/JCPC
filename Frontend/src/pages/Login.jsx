import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { MdBackspace } from "react-icons/md";

export default function LoginScreen() {
	const [pin, setPin] = useState("");

	const handleNumberClick = (number) => {
		setPin((prev) => prev + number);
	};

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { user, login } = useAuth();

	const handleDelete = (e) => {
		e.preventDefault();
		setPin((prev) => prev.slice(0, -1));
	};

	useEffect(() => {
		if (user) {
			navigate("/home");
		}
	}, [user, navigate]);

	async function handleLogin(e) {
		e.preventDefault();

		try {
			if (pin === "000000" || pin === "admin") {
				setLoading(true);

				setTimeout(() => {
					login(true);
					navigate(`/home`);
					setLoading(false);
				}, 1500);
			} else {
				setError("Incorrect password");
			}
		} catch (err) {
			console.error(err);
			setError("Failed to log in. Please try again later.");

			setTimeout(() => {
				setError("");
			}, 2000);
			setLoading(false);
		}
	}

	return (
		<>
			{loading && (
				<div className="fixed inset-0 flex items-center justify-center z-50 ">
					<div className="inline-block mt-60 animate-spin text-white rounded-full border-4 border-solid border-current border-e-transparent h-8 w-8"></div>
				</div>
			)}
			<form className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-r from-red-300 via-orange-200 to-pink-300">
				<div className="w-64 space-y-6 text-center">
					<div className="relative w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
						RB
						<div className="absolute bottom-0 right-0 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3 text-gray-600"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
							</svg>
						</div>
					</div>
					<div className="space-y-2">
						<h2 className="text-2xl font-semibold">Rahul Bhandari</h2>
						{error && <div className="text-red-500">{error}</div>}
					</div>
					<div className="relative">
						<input
							type="password"
							placeholder="PIN or password"
							value={pin}
							onChange={(e) => setPin(e.target.value)}
							className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							aria-label="Enter PIN or password"
						/>
						<button
							className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
							onClick={handleLogin}
							aria-label="Submit PIN or password">
							→
						</button>
					</div>
					<div className="grid grid-cols-3 gap-4">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
							<button
								onKeyDown={handleLogin}
								key={num}
								onClick={(e) => {
									e.preventDefault();
									handleNumberClick(num.toString());
								}}
								className="p-2  rounded-md hover:bg-gray-100 focus:outline-none font-semibold text-xl focus:ring-2 focus:ring-blue-500">
								{num}
							</button>
						))}
						<div
							className="p-2  rounded-md cursor-default"
							aria-label="Delete"></div>
						<button
							onClick={(e) => {
								e.preventDefault();
								handleNumberClick("0");
							}}
							className="p-2 text-xl font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
							0
						</button>
						<button
							onClick={handleDelete}
							className="p-2  rounded-md opacity-50 flex items-center justify-center">
							<MdBackspace />
						</button>
					</div>
				</div>
				<div className="fixed bottom-4 left-4 space-x-4">
					<button
						className="p-2 hover:bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
						aria-label="Sign out">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
					</button>
				</div>
			</form>
		</>
	);
}
