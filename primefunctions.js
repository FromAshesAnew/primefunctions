function primeCheck(threshold) {
  let i;
  for (i = 2; i < threshold; i++) {
    if (threshold % i === 0) {
      return false;
    }
  }
  return true;
}

function primeGen(threshold) {
  const list = [];
  let i;
  for (i = 2; i < threshold; i++) {
    if (primeCheck(i) === true) {
      list.push(i);
    }
  }
  return list;
}
console.log('PrimeGen Test Results');
console.log(primeGen(10));

function cumulativeSum(list) {
  const list2 = [];
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
    list2.push(sum);
  }
  return list2;
}

console.log('Cumulative Sum Test Results');
console.log(cumulativeSum([1, 2, 3, 4]));