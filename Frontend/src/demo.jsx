<div className="flex h-screen">
	{/* Sidebar */}
	<div className="w-1/6 min-w-40 bg-blue-800 text-white flex flex-col items-center pt-6">
		<div className="my-4">🌥️</div>
		<nav className="flex flex-col space-y-4">
			<div className="cursor-pointer">Cloud App</div>
			<div className="cursor-pointer">Data</div>
			<div className="cursor-pointer">Profile</div>
			<div className="cursor-pointer">Help</div>
		</nav>
	</div>
	{/* Main Content */}
	<div className="flex-1 bg-gray-100 p-6 pt-12">
		<h1 className="text-xl font-bold mb-6 text-black">
			Welcome Shivam Borhude
		</h1>

		{/* Main Applications Section */}
		<section className="mb-6">
			<h2 className="font-semibold mb-4 text-black    ">JIO Applications</h2>
			<div className="grid grid-cols-4 gap-4">
				{mainApps.map((app, index) => (
					<div
						key={index}
						className="flex flex-col items-center p-4 bg-white rounded shadow cursor-pointer">
						<div className="text-3xl mb-2">{app.icon}</div>
						<div>{app.name}</div>
					</div>
				))}
			</div>
		</section>

		{/* Other Applications Section */}
		<section>
			<h2 className="font-semibold mb-4 text-black">Other Applications</h2>
			<div className="grid grid-cols-5 gap-4">
				{otherApps.map((app, index) => (
					<div
						key={index}
						className="flex flex-col items-center p-4 bg-white rounded shadow cursor-pointer">
						<div className="text-3xl mb-2">{app.icon}</div>
						<div>{app.name}</div>
					</div>
				))}
			</div>
		</section>
	</div>
</div>;
