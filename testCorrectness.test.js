/* eslint-env mocha, chai */
/*  global sumFor, sumWhile, sumRecursion, sumTheSimpleWay, chai */

describe('primefunctions', function () {
  const panswer = [2, 3, 5, 7];
  const panswer2 = [2, 3, 5, 7, 11, 13, 17, 19]
  const canswer = [1, 3, 6, 10]
  const canswer2 = [10, 21, 33, 46, 60]

  describe('primeGen()', function () {
    it('primeGen(10) = [2, 3, 5, 7]', function () {
      chai.expect(primeGen(10)).to.eql(panswer);
    });
    it('primGen(20) = [2, 3, 5, 7, 11, 13, 17, 19] ', function () {
      chai.expect(primeGen(20)).to.eql(panswer2);
    });
  });

  describe('cumulativeSum()', function () {
    it('cumulativeSum([1, 2, 3, 4]) = [1, 3, 6, 10] ', function () {
      chai.expect(cumulativeSum([1, 2, 3 ,4])).to.eql(canswer);
    });
    it('cumlativeSum([10, 11, 12, 13, 14]) = [10, 21, 33, 46, 60]', function () {
      chai.expect(cumulativeSum([10, 11, 12, 13, 14])).to.eql(canswer2);
    });
  });
});