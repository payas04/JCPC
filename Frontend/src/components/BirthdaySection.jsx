const BirthdaySection = ({ todayBirthday, upcomingBirthday }) => {
	return (
		<div className="px-4">
			<h3 className="text-blue-800 font-semibold text-xl mt-6 mb-2">
				Birthday Events
			</h3>
			<h4 className="text-blue-800 font-normal text-lg mt-2 mb-2 border-b-[1px] border-gray-300">
				Today ({todayBirthday.length})
			</h4>
			<div className="Birthday max-h-[135px] overflow-y-scroll pb-4 h-fit">
				{todayBirthday.length !== 0 ? (
					todayBirthday.map((btd, index) => (
						<div key={index} className="flex mt-2">
							<img
								src={`/images/members/${btd.Domain}.jpg`}
								alt="member"
								width={50}
								className="h-14 w-14 rounded-lg"
							/>
							<div className="my-auto w-full pl-2">
								<p className="font-semibold text-sm">{btd.Name}</p>
								<p className="font-light text-sm">{btd.DOB}</p>
							</div>
						</div>
					))
				) : (
					<p className="font-light text-blue-800">No Birthday Events Today</p>
				)}
			</div>
			<h4 className="text-blue-800 font-normal text-lg mb-2 border-b-[1px] border-gray-300 mt-2">
				Upcoming ({upcomingBirthday.length})
			</h4>
			<div className="Birthday h-fit max-h-[135px] overflow-y-scroll pb-4">
				{upcomingBirthday.length !== 0 ? (
					upcomingBirthday.map((btd, index) => (
						<div className="flex mt-2" key={index}>
							<img
								src={`/images/members/${btd.Domain}.jpg`}
								alt="member"
								width={50}
								className="h-14 w-14 rounded-lg"
							/>
							<div className="my-auto w-full pl-2">
								<p className="font-semibold text-sm">{btd.Name}</p>
								<p className="font-normal text-sm text-blue-800">{btd.DOB}</p>
							</div>
						</div>
					))
				) : (
					<p className="font-light">No Upcoming Events Today</p>
				)}
			</div>
		</div>
	);
};

export default BirthdaySection;
