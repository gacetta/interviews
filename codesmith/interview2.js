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

//declare function usePotions
// input: str
// output: str
function usePotions(str) {
  // declare outputStr
  let outputStr = '';
  // declare pointer
  let i = 0;

  // iterate over the string - use a while loop and pointer
  while (i < str.length) {
    // store the current character and the nextChar
    const currentChar = str[i];
    const nextChar = str[i + 1];

    // if nextChar === A
    if (nextChar === 'A') {
      // add 1 to the digit using your "addOne" function
        // remember nextChar is a str and addOne takes a Number
        // concat to outputStr
      outputStr += addOne(Number(currentChar));
      // incremenet pointer by 2 (so we skip looking at the A)
      i += 2;
    // if nextChar === B
    } else if (nextChar === 'B') {
      // subtract 1 to the digit using your "subtractOne" function
        // remember nextChar is a str and subtractOne takes a Number
        // concat to outputStr
      outputStr += subtractOne(Number(currentChar));
      // incremenet pointer by 2 (so we skip looking at the A)
      i += 2;
    // if next char === undefined
    } else {
      // we're on a numberChar.  Add char to outputStr and incremenet i by 1 to check next el
      outputStr += currentChar;
      i++;
    }
  }
  
  return outputStr;
}

// 3 grows to 4, 8 shrinks to 7
console.log(usePotions("9999B")) //➞ "9998"
console.log(usePotions("9A123")) //➞ "10123"
console.log(usePotions("567")) //➞ "567"