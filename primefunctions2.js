function primeCheck(threshold) {
<<<<<<< Updated upstream
  let i;
  // changed to Math.sqrt(threshold) instead of threshold to cut down time
  for (i = 2; i <= Math.sqrt(threshold); i++) {
=======
  
  let i;
  for (i = 2; i < threshold; i++) {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  let list2 = [];

  for (let outer = 0; Primes[outer] < threshold; outer++) {
    for (let inner = 0; inner < outer; inner++) {
      let primeList = [];
      for (let middle = inner; middle < outer; middle++) {
        primeList.push(Primes[middle]);
      }
      primeList = cumulativeSum(primeList);
      const sums = primeList[primeList.length - 1];
=======

  for (let i = 0; Primes[i] < threshold; i++) {
    for (let j = 0; j < i; j++) {
      let list = [];
      for (let k = j; k < i; k++) {
        list.push(Primes[k]);
      }
      list = cumulativeSum(list);
      const sums = list[list.length - 1];
>>>>>>> Stashed changes

      if (sums > threshold) {
        break;
      }

<<<<<<< Updated upstream
      if (primeCheck(sums) === true) {
        if (biggestSums <= outer - inner) {
          biggestSums = outer - inner;
=======
      if (Primes.includes(sums)) {
        if (biggestSums <= i - j) {
          biggestSums = i - j;
>>>>>>> Stashed changes
          Prime = sums;
        }
      }
    }
  }
<<<<<<< Updated upstream
  list2.push(Prime);
  list2.push(biggestSums);
  return list2;
}

const highestPrime = maxPrimeSum(10000);
console.log('MaxPrimeSum Test Results');
console.log(highestPrime);
=======
  return [Prime, biggestSums];
}

const highestPrime = maxPrimeSum(100);
console.log('MaxPrimeSum Test Results');
console.log(highestPrime);



>>>>>>> Stashed changes
