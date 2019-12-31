function getMin(...args) {
	let min = 0;
	args.forEach(element => {
		min > element ? min = element : min;
	});
	return min;
}
getMin(3, 0, -3);