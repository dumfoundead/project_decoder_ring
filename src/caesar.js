// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  alphabet = alphabet.split('')
  
  function caesar(input, shift, encode = true) {
    let result = ""
    try {
      if (!shift || shift === 0 || shift < -25 || shift > 25) {
        throw false
      } else {
        input.toLowerCase().split('').forEach(char => {
          if (!alphabet.includes(char)) {
            result += char
          } else {
            let matchingLetter
            let encodedIndex
            let encodedLetter

            matchingLetter = alphabet.find(letter => letter === char)

            if (encode) encodedIndex = (alphabet.indexOf(matchingLetter) + shift) % 26
            if (!encode) encodedIndex = (alphabet.indexOf(matchingLetter) - shift) % 26
            if (encodedIndex < 0) encodedIndex += 26
            
            encodedLetter = alphabet[encodedIndex]
            result += encodedLetter
          }
        })
        return result
      }
    } catch (error) {
      return error
    }
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
