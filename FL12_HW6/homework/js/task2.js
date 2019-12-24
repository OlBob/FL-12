let value1,
    value2,
    numVolume = 3,
    data = [];

for (let i = 0; i < numVolume; i++){
    data.push(Number(prompt(`Input value ${i + 1}:`, 0)));

    if (isNaN(parseFloat(data[i]))) {
        data.shift();
        console.log('input values should be ONLY numbers');
        break;
    } else if (data[i] <= 0) {
        data.shift();
        alert('A triangle must have 3 sides with a positive definite length');
        break;
    } 
}
if (data.length === numVolume) {
    let [a, b, c] = data;
    if (a + b > c && a + c > b && c + b > a) {
        if (a === b && b === c && a === c){
                console.log('Equilateral triangle');
        } else if (a === b || a === c || b === c){
                console.log('Isosceles triangle');
        } else {
            console.log('Scalene triangle');
        }
    } else {
        alert('Triangle doesn’t exist');
    }
} 