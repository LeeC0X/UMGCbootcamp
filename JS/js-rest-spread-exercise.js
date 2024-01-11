//ES5 coder version
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//Code refactored into ES2015 code version
const newFilterOutOdds = (...numbers) =>
  numbers.filter((odds) => odds % 2 === 0);

//Write a function to return the smallest argument
const findMin = (...numbers) => Math.min(...numbers);

//Write a function to merge 2 objects and return a new object with the 1st and 2nd object
const mergeObjects = (firstObj, SecondObj) => ({ ...firstObj, ...SecondObj });

//Write a function that return a new array with a given array and additional arguments doubled.
const doubleAndReturnArgs = (arr, ...doubleArg) => [
  ...arr,
  ...doubleArg.map((double) => double * 2),
];

//remove a random element in the items array and return a new array without that item
const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

//Return a new array with every item in array1 and array2
const extend = (array1, array2) => [...array1, ...array2];

//Return new object with all keys and values from obj and a new key value
const addKeyVal = (obj, key, val) => {
  return { ...obj, [key]: val };
};

//return new object with key removed
const removeKey = (obj, key) => {
  ({ [key]: undefined, ...obj } = obj);
  return obj;
};

//Combine two object and return a new object
const combine = (object1, object2) => ({ ...object1, ...object2 });

//Return a new object with a modified key and value
const update = (obj, key, val) => ({ ...obj, [key]: val });
