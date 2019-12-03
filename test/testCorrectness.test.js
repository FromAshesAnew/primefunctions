/* eslint-env mocha, chai */
/*  global sumFor, sumWhile, sumRecursion, sumTheSimpleWay, chai */

describe('primefunctions', function () {
  const answer = [2, 3, 5, 7]
  describe('primeGen()', function () {
    it('should return [2,3,5,7] for 10', function () {
      chai.expect(primeGen(10)).to.equal(answer);
    });
  });
});