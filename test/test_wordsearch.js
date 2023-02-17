const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
  
  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['H', 'A', 'L', 'Q', 'R'],
      ['E', 'S', 'C', 'Q', 'L'],
      ['L', 'I', 'P', 'R', 'M'],
      ['P', 'X', 'C', 'V', 'T'],
      ['Y', 'B', 'D', 'X', 'C']
    ], 'HELP');
    
    assert.isTrue(result);
  });
  
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['H', 'A', 'L', 'Q', 'R'],
      ['E', 'S', 'C', 'Q', 'L'],
      ['L', 'I', 'P', 'R', 'M'],
      ['P', 'X', 'C', 'V', 'T'],
      ['Y', 'B', 'D', 'X', 'C']
    ], 'QUIET');
    
    assert.isFalse(result);
  });

  it("should return undefined if there is no array present", function() {
    const result = wordSearch();
    
    assert.isUndefined(result);
  });
  
  it("should return 'empty array' if there is nothing in the array", function() {
    const result = wordSearch([]);

    assert.strictEqual(result, 'empty array');
  });
  
  it("should return true if the word shows up diagonally", function() {
    const result = wordSearch([
      ['h', 'q', 'w', 'd', 'v', 'c', 'u'],
      ['w', 'e', 'a', 'x', 's', 'q', 'w'],
      ['h', 'w', 'l', 'w', 'w', 'w', 'j'],
      ['y', 'q', 'w', 'l', 'a', 'b', 'k'],
      ['e', 'j', 'b', 'w', 'o', 'q', 'n'],
      ['w', 'w', 'j', 'u', 'c', 'w', 'h'],
      ['g', 'w', 'w', 'w', 'f', 'i', 'f'],
      ['n', 'u', 'f', 'w', 'o', 'n', 'r'],
    ], 'hello');
    
    assert.isTrue(result);
  });
  
  it("should return false if the word doesn't show up diagonally", function() {
    const result = wordSearch([
      ['h', 'q', 'w', 'd', 'v', 'c', 'u'],
      ['w', 'e', 'a', 'x', 's', 'q', 'w'],
      ['h', 'w', 'l', 'w', 'w', 'w', 'j'],
      ['y', 'q', 'w', 'l', 'a', 'b', 'k'],
      ['e', 'j', 'b', 'w', 'o', 'q', 'n'],
      ['w', 'w', 'j', 'u', 'c', 'w', 'h'],
      ['g', 'w', 'w', 'w', 'f', 'i', 'f'],
      ['n', 'u', 'f', 'w', 'o', 'n', 'r'],
    ], 'help');
    
    assert.isFalse(result);
  });
  
  it("should return false if the word doesn't show up backwards horizontally", function() {
    const result = wordSearch([
      ['t', 'a', 'e', 'd'],
      ['c', 'w', 'd', 'n'],
      ['a', 's', 'p', 'y'],
      ['t', 'l', 'o', 'o'],
    ], 'test');
    
    assert.isFalse(result);
  });
  
  it("should return true if the true word shows backwards horizontally", function() {
    const result = wordSearch([
      ['t', 's', 'e', 't'],
      ['c', 'w', 'd', 'n'],
      ['a', 's', 'p', 'y'],
      ['t', 'l', 'o', 'o'],
    ], 'test');
    
    assert.isTrue(result);
  });

  it("should return true if the true word shows backwards vertically", function() {
    const result = wordSearch([
      ['m', 'c', 'x', 't'],
      ['g', 's', 'j', 's'],
      ['p', 'd', 'h', 'e'],
      ['o', 'v', 'b', 't'],
    ], 'test');
    
    assert.isTrue(result);
  });
  
  it("should return false if the word doesn't show up backwards vertically", function() {
    const result = wordSearch([
      ['m', 'c', 'x', 't'],
      ['g', 's', 'j', 's'],
      ['p', 'd', 'h', 'e'],
      ['o', 'v', 'b', 't'],
    ], 'pro');
    
    assert.isFalse(result);
  });
});
