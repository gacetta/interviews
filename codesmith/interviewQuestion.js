function addOne(num) {
  return num + 1;
}

//1 = 2
//3 = 4
// console.log(addOne(1));
// console.log(addOne(3));


// Create a function "subtractOne" that takes a number as and argument and returns that number minus one

function subtractOne(num) {
  return num - 1;
}

/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your "subtractOne" function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

Example:
usePotions("3A78B51") ➞ "47751"
  3 grows to 4, 8 shrinks to 7
usePotions("9999B") ➞ "9998"
usePotions("9A123") ➞ "10123"
usePotions("567") ➞ "567"
*/

// declare function
// input: str
// output: str
function usePotions(str) {
  // declare outputStr - this is where we will store the updated values to print
  let outputStr = '';
  
  // iterate over the argument string and check each character
  for (let i = 0; i < str.length; i++) {
    // store currentChar
    const currentChar = str[i];
    // store nextChar
    const nextChar = str[i + 1];
    console.log('current: ', currentChar, 'next: ', nextChar)

    // if current character is not an A or Not a B - check the next character
    if (currentChar !== 'A' && currentChar !== 'B') {
      // if nextChar is an A, incremenet current character by one using addOne function and add to outputStr
      if (nextChar === 'A') {
        outputStr += addOne(Number(currentChar));
      } else if (nextChar === 'B') {
        // if nextChar is a B, decrement current character by one using subtractOne function and add to outputStr
        outputStr += subtractOne(Number(currentChar));
      } else {
        // if next char is neither, add to the outputStr
        outputStr += currentChar;
      }
      console.log('output: ', outputStr);
    }
  }
  return outputStr;
}

usePotions("3A78B51") //➞ "47751"
  // 3 grows to 4, 8 shrinks to 7
usePotions("9999B") //➞ "9998"
usePotions("9A123")// ➞ "10123"
usePotions("567") //➞ "567"


