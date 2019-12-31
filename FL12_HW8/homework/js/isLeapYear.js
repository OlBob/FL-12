const getYear = elem => (new Date(elem)).getFullYear();
const isValid = elem => isNaN(getYear(elem));
const isLeapYear = (data) => {
	if (isValid(data)) {
		return 'Invalid Date';
	} else {
		let year = getYear(data);
		return (year % 100 === 0 ? year % 400 === 0 : year % 4) === 0 ?
			`${year} is a leap year` :
			`${year} is not a leap year`;
	}
}
isLeapYear('2020-01-01 00:00:00');