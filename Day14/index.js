function countVowelConsonant(str) {
  return str.split("").reduce((acc, cur) => {
    if (
      cur === "a" ||
      cur === "e" ||
      cur === "i" ||
      cur === "o" ||
      cur === "u"
    ) {
      return acc + 1;
    } else {
      return acc + 2;
    }
  }, 0);
}

console.log(countVowelConsonant("abcde"));

//

/**
 * Test Suite
 */
/* describe("countVowelConsonant()", () => {
  it("returns total of vowels(1) and consonants(2) to be added", () => {
    // arrange
    const value = "abcde";

    // act
    const result = countVowelConsonant(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(8);
  });
}); */

/* const vowels = ['a', 'e', 'i', 'o', 'u']
return str.split('').reduce((acc, letter) => acc + (vowels.includes(letter) ? 1 : 2), 0) */
