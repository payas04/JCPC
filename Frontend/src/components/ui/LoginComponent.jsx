import { useEffect, useRef, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import gsap from "gsap";
import jio from "/images/logo/jio.svg";
import Grid from "./grid";

const LoginComponent = ({
	domainID,
	setDomainID,
	password,
	setPassword,
	handleLogin,
}) => {
	const logoRef = useRef(null);
	const cardRef = useRef(null);
	const leftGridRef = useRef(null);
	const rightGridRef = useRef(null);
	const [showPassword, setShowPassword] = useState(false);

	useEffect(() => {
		const tl = gsap.timeline();

		// Initial state setup
		gsap.set([logoRef.current, cardRef.current], {
			xPercent: -50,
			yPercent: -50,
			left: "50%",
			top: "50%",
		});

		// Hide grids initially
		gsap.set([leftGridRef.current, rightGridRef.current], {
			opacity: 0,
		});

		// Additional initial states
		gsap.set(logoRef.current, {
			y: "100vh", // Logo starts from bottom
		});

		gsap.set(cardRef.current, {
			opacity: 0, // Card starts invisible but in position
		});

		// Animation sequence
		tl.to(logoRef.current, {
			y: 0,
			duration: 0.8,
			ease: "power3.out",
		})
			.to(
				[logoRef.current, cardRef.current],
				{
					x: (index) => ["-=170", "+=150"][index],
					opacity: (index) => (index === 1 ? 1 : 1),
					duration: 0.6,
					ease: "power2.out",
				},
				"+=0.2"
			)
			.to(
				[leftGridRef.current, rightGridRef.current],
				{
					opacity: 1,
					duration: 0.5,
					ease: "power2.out",
				},
				"+=0.2"
			);
	}, []);

	return (
		<div className="h-screen w-full bg-white overflow-hidden relative">
			{/* Left Grid */}
			<div
				ref={leftGridRef}
				className="absolute left-12 top-1/2 -translate-y-1/2">
				<Grid />
			</div>

			{/* Logo Section */}
			<div
				ref={logoRef}
				className="absolute w-[450px] h-[450px] shadow-2xl fit-contain bg-[#0037AC] rounded-full flex items-center justify-center">
				<img src={jio} alt="Jio Logo" className="" />
			</div>

			{/* Login Card */}
			<div
				ref={cardRef}
				className="absolute bg-white h-[450px] p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] min-w-[380px]">
				<div className="pb-8">
					<h2 className="text-3xl font-normal">Log In</h2>
				</div>
				<div className="space-y-6">
					<form onSubmit={handleLogin}>
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Domain ID
							</label>
							<input
								type="text"
								value={domainID}
								onChange={(e) => setDomainID(e.target.value)}
								required
								placeholder="Enter your Domain ID"
								className="w-full bg-gray-100 rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>
						</div>
						<div className="space-y-2">
							<label className="block text-sm font-medium text-gray-700">
								Password
							</label>
							<div className="flex relative">
								<input
									type={showPassword ? "text" : "password"}
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									placeholder="Password"
									className="w-full bg-gray-100 rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
								/>
								<span
									className="absolute right-3 top-4 cursor-pointer"
									onClick={() => {
										setShowPassword(!showPassword);
									}}>
									{showPassword ? <FaEye /> : <FaRegEyeSlash />}
								</span>
							</div>
						</div>
						<div className="flex justify-end pt-6">
							<button className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl h-12 px-10 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>

			{/* Right Grid */}
			<div
				ref={rightGridRef}
				className="absolute right-12 top-1/2 -translate-y-1/2">
				<Grid />
			</div>
		</div>
	);
};

export default LoginComponent;
