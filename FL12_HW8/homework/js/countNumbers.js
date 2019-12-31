function makeNumber(data){
	return data.split('').filter(elem => isFinite(elem)).join('');
}
function countNumbers(){
	const array = makeNumber('erer384jj4444666888jfd123');
	console.log(array);
	let data = {};
	array.split('').forEach(element => {
		data[element] === undefined ? data[element] = 1 : data[element]++;
	});
	return data;
}
countNumbers('erer384jj4444666888jfd123');