let value1,
    value2,
    numVolume = 3,
    data = [],
    formulaArgs = {
        power: 2,
        two: 2,
        four: 4
    }

for (let i = 0; i < numVolume; i++){
    data.push(prompt(`Input value ${i + 1}:`, 0));
    if (isNaN(parseFloat(data[i])) || Number.parseInt(data[i]) === 0) {
        data.shift();
        console.log('Invalid input data');
        break;
    }
}
let [a, b, c] = data;
if (data.length === numVolume){
    let discriminant = Math.pow(b, formulaArgs.power) - formulaArgs.four * a * c;
    if (discriminant > 0) {
        value1 = Math.round((-b - Math.sqrt(discriminant))/formulaArgs.two/a);
        value2 = Math.round((-b + Math.sqrt(discriminant))/formulaArgs.two/a);
        console.log(`x1 = ${value1} and x2 = ${value2}`)
    } else if (discriminant === 0) {
        value1 = value2 = Math.round(-b / a / formulaArgs.two);
        console.log(`x = ${value1}`)
    } else {
        console.log('no solution');
    }
}
