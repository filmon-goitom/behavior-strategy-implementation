// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------

const reverse = (toReverse = '') => {
  let result = '';
  for(let i = toReverse.length - 1; i >= 0; i--){
    result += toReverse[i]
  }
  return result
}

//---------------------------------

for (const solution of [secretSolution , reverse ]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...

    it('should throw TypeError if it is not a string', () =>{
      expect(()=>(solution(23)).toThrow(TypeError))
    })

  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
