export function getTodaysBirthdays(birthdayArray) {
	// Get today's date
	const today = new Date();
	const todayMonth = today.toLocaleString("default", { month: "long" });
	const todayDate = today.getDate();

	// Filter the array to get only the people whose birthday is today
	return birthdayArray.filter((person) => {
		// Split the DOB string into day and month (assuming format "25th October")
		const [dayWithSuffix, month] = person.DOB.split(" ");

		// Remove any non-numeric characters from the day part
		const day = parseInt(dayWithSuffix, 10);

		// Check if day and month match today's day and month
		return day === todayDate && month === todayMonth;
	});
}

export function getUpcomingBirthdaysThisMonth(birthdayArray) {
	// Get today's date
	const today = new Date();
	const currentMonth = today.getMonth(); // Months are 0-indexed (0 for January, 11 for December)
	const currentDate = today.getDate();

	// Filter the array to get only the people whose birthday is in the current month and is upcoming (excluding today)
	const upcomingBirthdays = birthdayArray.filter((person) => {
		// Split the DOB into day and month (assuming format "25th October")
		const [dayWithSuffix, month] = person.DOB.split(" ");

		// Remove any non-numeric characters from the day part
		const day = parseInt(dayWithSuffix, 10);

		// Create a date object to extract the month number
		const birthdayDate = new Date(`${month} 1, 2000`);
		const birthdayMonth = birthdayDate.getMonth(); // Extract month (0-11)

		// Check if the birthday is in the current month and upcoming (excluding today)
		return birthdayMonth === currentMonth && day > currentDate;
	});

	// Sort the upcoming birthdays by day
	upcomingBirthdays.sort((a, b) => {
		const dayA = parseInt(a.DOB.split(" ")[0], 10);
		const dayB = parseInt(b.DOB.split(" ")[0], 10);
		return dayA - dayB;
	});

	return upcomingBirthdays;
}
