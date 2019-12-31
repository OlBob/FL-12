function getMin(...args) {
    let min = 0;
    for (let i = 0; i < args.length; i++) {
        min > args[i] ? min = args[i] : min;
    }   
    console.log(min);
    return min;
}
getMin(3, 0, -3);