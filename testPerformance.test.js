const { assert } = chai;
describe('maxPrimeSum', function () {
  it('maxPrimeSum(10000) should take less than 40ms', function () {
    this.slow(0);
    this.timeout(40);
    maxPrimeSum(10000);
  })
  it('maxPrimeSum(100000) should take less than 900ms', function () {
    this.timeout(900);
    maxPrimeSum(100000);
  });
});


