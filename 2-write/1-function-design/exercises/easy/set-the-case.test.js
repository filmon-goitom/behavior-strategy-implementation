// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------
function changeWord(text = '', lowerCase = true) {
  // const result = text.split('').reverse().join('');
  return lowerCase ? text.toLowerCase() : text.toUpperCase();
}
//-------------------------------

for (const solution of [secretSolution, changeWord]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf',)).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      it("first parameter defaults to an empty string", () => {
        expect(solution("", true)).toEqual("");
      });
      // when the text is all upper case
      it("first parameter is reversed in lowercase", () => {
        expect(solution("ASDF", true)).toEqual("asdf");
      });
      // when the text is all lower case
      it("first parameter is reversed in the default lowercase", () => {
        expect(solution("asdf", true)).toEqual("asdf");
      });
      // when the text is mixed upper and lower case
      it("the first parameter is reversed in lowercase", () => {
        expect(solution("ASdf", true)).toEqual("asdf");
      });
      // when the text contains punctuation
      it("punctuation marks within the text are treated like characters", () => {
        expect(solution("asdf!", true)).toEqual("asdf!");
      });
      // when the text contains numbers
      it("Numbers within the text are treated as string characters", () => {
        expect(solution("asdf4", true)).toEqual("asdf4");
      });
      // when only numbers are given as input
      it("should throw an error since only strings are accepted", () => {
        expect(() => solution(12345, true)).toThrow(TypeError);
      });
    });
    describe('when set to upper case', () => {
      it("first parameter defaults to an empty string", () => {
        expect(solution("", false)).toEqual("");
      });
      // when the text is all upper case
      it("first parameter is reversed in uppercase", () => {
        expect(solution("ASDF", false)).toEqual("ASDF");
      });
      // when the text is all lower case
      it("first parameter is reversed in the default uppercase", () => {
        expect(solution("asdf", false)).toEqual("ASDF");
      });
      // when the text is mixed upper and lower case
      it("first parameter is reversed in the default uppercase", () => {
        expect(solution("ASdf", false)).toEqual("ASDF");
      });
      // when the text contains punctuation
      it("first parameter is reversed including the punctuation", () => {
        expect(solution("ASDF!", false)).toEqual("ASDF!");
      });
      // when the text contains numbers
      it("first parameter is reversed including the numbers", () => {
        expect(solution("hIgH-5", false)).toEqual("HIGH-5");
      });
      // when only numbers are given
      it("should throw an error when the input is not string", () => {
        expect(() => solution(34, false)).toThrow(TypeError);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
