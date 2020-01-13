const convert = (...args) => {
  return args.map(elem => {
    return typeof elem === 'string' ? parseInt(elem) : elem.toString();
  });
}
 
const executeforEach = (arr, func) => {
  return arr.map(elem => func(elem));
}

const mapArray = (arr, func) => {
  arr = arr.map(elem => typeof elem === 'string' ? parseInt(elem) : elem);
  return executeforEach(arr, func);
}

const filterArray = (arr, func) => {
  let newArr = [];
  executeforEach(arr, func).forEach(function (element, index) {
    if (element) {
      newArr.push(arr[index]);
    }
  });
  return newArr;
}

const flipOver = str => {
  return str === '' ? '' : flipOver(str.substring(1)) + str.charAt(0);
}
 
const makeListFromRange = arr => {
  let newArr = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    newArr.push(i);
  }
  return newArr;
}
 
const actors = [{
    name: 'tommy',
    age: 36
  },
  {
    name: 'lee',
    age: 28
  }
];
const getArrayOfKeys = (array, key) => {
	let nArray =[];
	executeforEach(array, function(el) {
		nArray.push(el[key]);
	})

	return nArray;
}
 
const substitute = array => {
	let num = 30;
	return mapArray(array, el => {
    el < num ? el = '*' : el;
    return el;
	})
}
 
const params ={
  'date' : {
    'year': 2019,
    'month': 0,
    'day': 2
  },
  'convDay' : {
    'hours': 24,
    'minutes': 3600,
    'mSeconds': 1000
  } 
};
const date = new Date(params.date.year, params.date.month, params.date.day);
const getPastDay = (date, day) => {
	let secondDate = new Date(date - day*params.convDay.hours*params.convDay.minutes*params.convDay.mSeconds);
	return secondDate.getDate();
}

const formatDate = date => {
  let lessThenNum = 10;
	let tmpDate = `${date.getFullYear()}/${date.getMonth() +1}/${date.getDate()}`;
  let tmpHours = date.getHours() < lessThenNum ? '0' + date.getHours() : date.getHours();
  let tmpMinutes = date.getMinutes() < lessThenNum ? '0' + date.getMinutes() : date.getMinutes();
	return `${tmpDate} ${tmpHours}:${tmpMinutes}`;
}
