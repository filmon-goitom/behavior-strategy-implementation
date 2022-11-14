/* eslint-disable prefer-template */
// #todo

`use strict`

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------


function wordsToLowerCase(text = '', lowerCase = true) {
  const result = text.split('').reverse().join('');
  return lowerCase ? result.toLowerCase():result.toUpperCase();
}




//--------------------------------------

for (const solution of [secretSolution, wordsToLowerCase]) {
  describe(
    solution.name + ": reverses a string then sets to lower or upper case",
    () => {
      describe("the function's default parameters", () => {
        it("second parameter defaults to true", () => {
          expect(solution("asdf")).toEqual("fdsa");
        });
        it("first parameter defaults to an empty string", () => {
          expect(solution()).toEqual("");
        });
      });
      // write the tests indicated by the comments
      describe("when set to lower case", () => {
        // when the text is an empty string
        it("first parameter defaults to an empty string", () => {
          expect(solution("", true)).toEqual("");
        });
        // when the text is all upper case
        it("first parameter is reversed in lowercase", () => {
          expect(solution("BRIAN", true)).toEqual("nairb");
        });
        // when the text is all lower case
        it("first parameter is reversed in the default lowercase", () => {
          expect(solution("hello", true)).toEqual("olleh");
        });
        // when the text is mixed upper and lower case
        it("the first parameter is reversed in lowercase", () => {
          expect(solution("HeLLo", true)).toEqual("olleh");
        });
        // when the text contains punctuation
        it("punctuation marks within the text are treated like characters", () => {
          expect(solution("Hello!", true)).toEqual("!olleh");
        });
        // when the text contains numbers
        it("Numbers within the text are treated as string characters", () => {
          expect(solution("high5", true)).toEqual("5hgih");
        });
        // when only numbers are given as input
        it("should throw an error since only strings are accepted", () => {
          expect(() => solution(12345, true)).toThrow(TypeError);
        });
      });
      describe("when set to upper case", () => {
        // when the text is an empty string
        it("first parameter defaults to an empty string", () => {
          expect(solution("", false)).toEqual("");
        });
        // when the text is all upper case
        it("first parameter is reversed in uppercase", () => {
          expect(solution("HIGH FIVE", false)).toEqual("EVIF HGIH");
        });
        // when the text is all lower case
        it("first parameter is reversed in the default uppercase", () => {
          expect(solution("brian munene", false)).toEqual("ENENUM NAIRB");
        });
        // when the text is mixed upper and lower case
        it("first parameter is reversed in the default uppercase", () => {
          expect(solution("BriaN MUneNe", false)).toEqual("ENENUM NAIRB");
        });
        // when the text contains punctuation
        it("first parameter is reversed including the punctuation", () => {
          expect(solution("Brian Munene!..", false)).toEqual("..!ENENUM NAIRB");
        });
        // when the text contains numbers
        it("first parameter is reversed including the numbers", () => {
          expect(solution("hIgH-5", false)).toEqual("5-HGIH");
        });
        // when only numbers are given
        it("should throw an error when the input is not string", () => {
          expect(() => solution(45755, false)).toThrow(TypeError);
        });
      });
    }
  );
}
// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }