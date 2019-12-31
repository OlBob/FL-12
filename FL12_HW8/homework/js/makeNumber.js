function makeNumber(data){
	return data.split('').filter(elem => isFinite(elem)).join('');
}
makeNumber('ererjjcdvj5fd');