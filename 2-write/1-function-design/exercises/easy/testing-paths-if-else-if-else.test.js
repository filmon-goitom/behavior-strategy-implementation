// #todo

'use strict';

/**
 * returns a description of how similar two values are
 *  if they are strictly equal -> 'strictly equal'
 *  if they have the same type -> 'same type'
 *  else -> 'totally different'
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */

// -------- your solutions --------
function similarity(val1, val2) {
  return val1 === val2 ? 'strictly equal' :  typeof val1 === typeof val2 ? "same type" : "totally different"
}

for (const solution of [secretSolution, similarity]) {
  describe(solution.name + ': determines how similar two values are', () => {
    describe('when values are strictly equal', () => {
      it('two identical strings -> "strictly equal"', () => {
        expect(solution('hello','hello')).toEqual('strictly equal');
      });
      it('two identical numbers -> "strictly equal"', () => {
        expect(solution(12, 12)).toEqual('strictly equal')
      });
      it('two identical booleans -> "strictly equal"', () => {
        expect(solution(true, true)).toEqual('strictly equal')
      });
    });
    describe('when values have the same type', () => {
      it('two different strings -> "same type"', () => {
        expect(solution('hello', 'world')).toEqual('same type');
      });
      it('two different numbers -> "same type"', () => {
        expect(solution(4, 3)).toEqual('same type');
      });
      it('two different booleans -> "same type"', () => {});
    });
    describe('when values are nothing alike', () => {
      it('values that are obviously different', () => {
        expect(solution(null, NaN)).toEqual('totally different');
      });
      it('values that can be confusing', () => {
        expect(solution(4, 'hello')).toEqual('totally different')
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
