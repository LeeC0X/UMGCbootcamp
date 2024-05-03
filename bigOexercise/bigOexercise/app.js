const addTotal = (num) => {
  let arr = [];
  for (let i = 1; i < num + 1; i++) {
    arr.push(i);
  }

  return arr.reduce((accumulator, currentValue) => {
    accumulator += currentValue;
    return accumulator;
  });
};

console.log(addTotal(4));

function addUpToFirst(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}


console.log(addUpToFirst(4))