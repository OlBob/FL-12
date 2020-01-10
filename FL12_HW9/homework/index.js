// 1. Write a function that converts the argument values. If it will be a string, convert it to number and wise versa. It should return an array of converted values.
const convert = (...args) => {
  return args.map(elem => {
    return typeof elem === 'string' ? parseInt(elem) : elem.toString();
  });
}
convert('1', 2, 3, '4') // [1, '2', '3', 4]


// 2. Write function, which iterates over array and executes function on each element.
const executeforEach = (arr, func) => {
  return arr.map(elem => func(elem));
}
executeforEach([1, 2, 3], function (el) {
  console.log(el * 2)
}) // logs 2 4 6


// 3. Write function, which returns transformed array based on function, which passed as a second parameter (callback). If array contains a number as string, it should convert it and return as number. You’re allowed to change a body of that callback function if you need. Reuse function from task 2.
const mapArray = (arr, func) => {
  arr = arr.map(elem => typeof elem === 'string' ? parseInt(elem) : elem);
  return executeforEach(arr, func);
}
mapArray([2, '5', 8], function (el) {
  return el + 3
}) // returns [5, 8, 11]


// 4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.
const filterArray = (arr, func) => {
  let newArr = [];
  executeforEach(arr, func).forEach(function (element, index) {
    if (element) {
      newArr.push(arr[index]);
    }
  });
  return newArr;
}
filterArray([2, 5, 8], function (el) {
  return el % 2 === 0
}) // returns [2, 8]


// 5. Write a function that reverses the string value passed into it.
const flipOver = str => {
  return str === '' ? '' : flipOver(str.substring(1)) + str.charAt(0);
}
flipOver('hey world') // 'dlrow yeh'


// 6. Write a function which creates an array from the given range of numbers
const makeListFromRange = arr => {
  let newArr = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    newArr.push(i);
  }
  return newArr;
}
makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]




// 7. Write a function that accepts an array of object and returns new array of values by passed key name.
// That function should not change the original array. Reuse function from task 2. 
const actors = [{
    name: 'tommy',
    age: 36
  },
  {
    name: 'lee',
    age: 28
  }
];

//getArrayOfKeys(actors, 'name'); // ['tommy', 'lee']