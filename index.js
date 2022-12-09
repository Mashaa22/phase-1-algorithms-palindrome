// Write your algorithm here


// Neede to write a function isPalindrome to that receives one argument in the form of a string and should be a single argument. 
// The function should then return `TRUE` if the string reads reads identically both forward and backward.
// If it doesn't, the function should return `FALSE` instead.


// TEST CASE


// I expect keying in the following string to the console to give   =>(truthy)

// ==>  console.log(isPalindrome(dad))

//I also expect keying the string bellow to console to give   =>(falsey)

// ==>  console.log(isPalindrome(monday))



//PSEUDOCODE


// Initialize function isPalindrome() 
// Iterate over the string on the first and last index, to and fro.
// Add a conditional statement to check if the loop gives the same result, if looped, or not
// If yes, let it return (true) and if not, let it return (false)



//CODE


// Initialize function isPalindrome() 
function isPalindrome(word) {
  // Iterate over the string on the first and last index, to and fro.
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    // Add a conditional statement to check if the loop gives the same result, if looped, or not
    if (word[startIndex] !== word[endIndex]) {
      // If not, let it return (falsey)
      return false;
    }
    // If it does, let it return (truthy)
  }
  return true; 
}


// Making It Clean And Readable
function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true; 
}


// // You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotator"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("maths"));
}

module.exports = isPalindrome;