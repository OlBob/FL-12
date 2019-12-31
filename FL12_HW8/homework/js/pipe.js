function addOne(x){
    return x + 1;
}
const pipe = (num, ...args) => {
	let sum = num;
	args.forEach(element => {
		sum = element(sum); 
	});
	return sum;
};
pipe(1, addOne, addOne, addOne);