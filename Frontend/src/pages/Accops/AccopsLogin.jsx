import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { setUser } from "../../store/userSlice";
import AppHeader from "../../components/layouts/AppHeader";

const AccopsLogin = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();
		const user = { email, password };
		dispatch(setUser(user));
	};

	if (user) return <Navigate to={"/accops/dashboard"} />;

	return user ? (
		<Navigate to={"/accops/dashboard"} />
	) : (
		<>
			<AppHeader />
			<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div class="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						class="mx-auto h-10 w-auto"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form class="space-y-6" action="" onSubmit={handleLogin}>
						<div>
							<label
								for="email"
								class="block text-sm/6 font-medium text-gray-900">
								Email address
							</label>
							<div class="mt-2">
								<input
									value={email}
									name="email"
									type="email"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									autocomplete="email"
									required
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div>
							<div class="flex items-center justify-between">
								<label
									for="password"
									class="block text-sm/6 font-medium text-gray-900">
									Password
								</label>
								<div class="text-sm">
									<a
										href="#"
										class="font-semibold text-indigo-600 hover:text-indigo-500">
										Forgot password?
									</a>
								</div>
							</div>
							<div class="mt-2">
								<input
									value={password}
									name="password"
									type="password"
									autocomplete="current-password"
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									required
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AccopsLogin;
