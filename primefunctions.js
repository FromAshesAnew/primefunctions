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
  const Primes = primeGen(threshold);
  let biggestSums = 0;
  let Prime = 0;
  let list2 = [];

  for (let outer = 0; Primes[outer] < threshold; outer++) {
    for (let inner = 0; inner < outer; inner++) {
      let primeList = [];
      for (let middle = inner; middle < outer; middle++) {
        primeList.push(Primes[middle]);
      }
      primeList = cumulativeSum(primeList);
      const sums = primeList[primeList.length - 1];

      if (sums > threshold) {
        break;
      }

      if (primeCheck(sums) == true) {
        if (biggestSums <= outer - inner) {
          biggestSums = outer - inner;
          Prime = sums;
        }
      }
    }
  }
  list2.push(Prime);
  list2.push(biggestSums);
  return list2;
}

const highestPrime = maxPrimeSum(100);
console.log('MaxPrimeSum Test Results');
console.log(highestPrime);