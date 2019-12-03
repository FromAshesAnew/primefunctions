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

    for (let i = 0; Primes[i] < threshold; i++) {
      for (let j = 0; j < i; j++) {
        let list = [];
        for (let k = j; k < i; k++) {
          list.push(Primes[k]);
        }
        list = cumulativeSum(list);
        const sums = list[list.length - 1];

        if (sums > threshold) {
          break;
        }

        if (Primes.includes(sums)) {
          if (biggestSums <= i - j) {
            biggestSums = i - j;
            Prime = sums;
          }
        }
      }
    }
    return [Prime, biggestSums];
  }

const highestPrime = maxPrimeSum(100);
console.log('MaxPrimeSum Test Results');
console.log(highestPrime);



