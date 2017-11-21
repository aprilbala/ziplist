/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('ZipList', function () {
  const testNums = [6, 7, 8];
  const testChars = ['a', 'b', 'c'];
  describe('zipList()', function () {
    it('must deep include the six item array', function () {
      chai.expect(zipList(testNums, testChars)).to.deep.include(6, 'a', 7, 'b', 8, 'c');
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('must deep include the six item array', function () {
      chai.expect(zipListTheSimpleWay(testNums, testChars)).to.deep.include(6, 'a', 7, 'b', 8, 'c');
    });
  });
});
