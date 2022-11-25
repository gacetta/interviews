// Declare a variable 'number' and set it to the value 10.
const number = 10;

/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

//declare function
// input: postivie integer
// output: number
function addNumbers(num) {
  // declare sum variable
  let sum = 0;
	// use a for loop start at 1
  	// use the for loop counter to add to sum
  		// stop the for loop counter === num
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  
  return sum;
}

// console.log(addNumbers(5)); // 6

// Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function

// console.log(addNumbers(number));

// Create a function "addOne" that takes a number as and argument and returns that number plus one

// input: number
// output: number

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

console.log(subtractOne(10));

/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.

Example:
usePotions("3A78B51") ➞ "47751"
  3 grows to 4, 8 shrinks to 7
usePotions("9999B") ➞ "9998"
usePotions("9A123") ➞ "10123"
usePotions("567") ➞ "567"
*/

//declare function
// input: string
// output: string
function usePotions(str) {
  //declare outputStr
  let outputStr = '';
	console.log('output: ', outputStr);
	// iterate over string check each character
  for (let i = 1; i < str.length; i++) {
    const currentChar = str[i];
    const previousChar = str[i - 1];
    let currentNum = Number(currentChar);
    let previousNum = Number(previousChar);
    
    console.log('i: ', i);
    console.log('currentChar: ', currentChar)
    console.log('previousChar: ', previousChar)
    console.log('currentNum: ', currentNum)
    console.log('previousNum: ', previousChar)
    
    
    // if we find an A
    if (currentChar === 'A') {
      console.log('found an A')
      // modify the previous character by adding 1 use addOne function
      outputStr += addOne(previousNum);
      // outputStr += (addOne(Number(str[i - 1])));    //check
      // if we find a B
		
    
      
    } else if (currentChar === 'B') {
      console.log('found an B')

      // modify the previous character by subtracting 1
      // subtractOne
      // push numeric value to the output
      outputStr += subtractOne(previousNum);
      
      // outputStr += (subtractOne(Number(str[i - 1])));
    } else {
      console.log('just a number')
      // add current char to outputStr
      outputStr += currentNum;
    }
    console.log('output: ', outputStr);
    console.log('---------------------')
  }
	return outputStr;
}


console.log(usePotions("3A7B")) //➞ "47751"
  // 3 grows to 4, 8 shrinks to 7
// console.log(usePotions("9999B")) //➞ "9998"
// console.log(usePotions("9A123")) //➞ "10123"
// console.log(usePotions("567")) //➞ "567"


//[376B]
//

[1, 3].join


