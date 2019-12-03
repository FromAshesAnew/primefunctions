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


function maxPrimeSum(threshold) {
  const list = [];
  let i;
  let count = 0;
  let total = 0;
  const primes = primeGen(threshold);

  while (total <= threshold) {
    for (i = 0; i < primes.length; i++) {
      count++;
      total += primes[i];
      if (total > threshold) {
        break;
      }
    }
  }
  if (primeCheck(total) === true) {
    list.push(total);
  } else {
    while (primeCheck(total) === false) {
      total -= primes[i];
      i--;
      count--;
    }
    list.push(total);
    list.push(count);
  }
  return list;
}

const highestPrime = maxPrimeSum(100);
console.log('MaxPrimeSum Test Results');
console.log(highestPrime);


