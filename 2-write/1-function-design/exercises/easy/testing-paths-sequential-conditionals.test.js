// #todo

'use strict';

/**
 * converts two boolean values into a binary string
 *  true become "1", false becomes "0"
 * @param {boolean} [a=false] - the left value
 * @param {boolean} [b=false] - the right value
 * @returns {string}
 * @example
 *  // true, false --> '10'
 *  // false, false --> '00'
 *  // false, true --> '01'
 */

// -------- your solutions --------

function binaryString(val1 = false, val2 = false) {
  if (typeof val1 !== 'boolean', typeof val2 !== 'boolean') {
    throw new TypeError('this should be a boolean');
  }
  let val3 = ''
  return val3+= val1 ? '1' : '0', val3+= val2 ? '1' : '0'
}

for (const solution of [secretSolution,binaryString]) {
  // this function only 4 possible combinations of arguments
  //  it's possible test them all and have 100% confidence in the function
  describe(solution.name + ': converts two booleans to binary', () => {
    it('true, true --> "11"', () => {
      const actual = solution(true,true);
      expect(actual).toEqual('11');
    });
    it('true, false --> "10"', () => {
      const actual = solution(true,false);
      expect(actual).toEqual('10');
    });
    it('false, true --> "01"', () => {
      const actual = solution(false,true);
      expect(actual).toEqual('01');
    });
    it('false, false --> "00"', () => {
      const actual = solution(false,false);
      expect(actual).toEqual('00');
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(c = false, a = false) { if ("boolean" != typeof c) { throw new TypeError("a is not boolean"); } if ("boolean" != typeof a) { throw new TypeError("b is not boolean"); } let b = ""; return b += c ? "1" : "0", b += a ? "1" : "0", b }
