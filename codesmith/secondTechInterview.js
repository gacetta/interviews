
/*
Declare a variable 'myNums' and set it to an object.
On that object you will have two key-value pairs. One key will be 'favoriteNumber' and its value will be your favorite number.
The other key will be 'randomNumber' and its value will be 12.
*/

const myNums = {
  favoriteNumber: 6,
  randomNumber: 12
}

// console.log(myNums)

/*
Write a function 'largestSwap' that takes a two-digit number and determines if it's the largest of two possible digit swaps. 'largestSwap' should return a boolean.
For example, if 27 is our our input, we should return false because swapping the digits gives us 72, and 72 > 27.
Furthermore, if our input is 43 'largestSwap' should return true because swapping the digits gives us 34 and 43 > 34.
*/

// input: num
// output: boolean
function largestSwap(num) {
  // declare and store firstDigit, secondDigit
  const numAsString = num.toString()
  const firstDigit = Number(numAsString[0])
  const secondDigit = Number(numAsString[1])

  // return firstDigit > secondDigit
  return firstDigit > secondDigit;
}

// console.log(largestSwap(27)) //false
// console.log(largestSwap(43)) //true

/* Check that your 'largestSwap' function is working correctly by passing the value of 'randomNumber' on your 'myNums' object to your 'largestSwap' function
*/

/// /console.log(largestSwap(myNums.randomNumber)) //false


/*
Create a function "countTimes" that takes in two arguments (an array and a search value). "countTimes" should return the number of times the search value is present in the array.

Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

// input: arr, num
// output: num
function countTimes(arr, searchVal) {
  // declare count = 0
  let outputCount = 0;
  // iterate over the array
  arr.forEach((element) => {
    // check if current element === search value
    if (element === searchVal) {
      outputCount++;
    }
  })
  return outputCount;
}

// console.log(countTimes([1, 8, 9, 9, 10], 9)) //-> 2

/*
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.

Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.
*/

// input: arrOfArr, search val (capital leter)
// ouput: num
function wordSearchLetterCounter(arrOfArr, searchVal) {
  let outputCount = 0;
  // iterate over the arrOfArr
  arrOfArr.forEach((array) => {
    // invoke countTimes on each array in arrOfArr
    // add the evaluated result of countTimes to outputCount
    outputCount += countTimes(array, searchVal);
  })
  return outputCount;
}

// console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D")) // 3


/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.

Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

// input: str single character
// ouput: inverse capitalization of that character
function changeCase(char) {
  // create a regex = /[A-Z]/
  const regex = /[A-Z]/g
  
// check if the character is lowercase using character.search(regex)
  if (regex.test(char)) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}

// console.log(changeCase('A')) //'a'
// console.log(changeCase('a')) //'A'



/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/

// input: str, callback
// output: new str
function effectString(str, callback) {
  // declare outputStr
  let outputStr = '';
  // iterate over string
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    outputStr += callback(currentChar)
  }
  return outputStr;
}


/* Check to that your "effectString" is working properly by passing it the string "hello WORLD" and the callback function "changeCase"
*/

// console.log(effectString('hello WoRlD', changeCase)); // HELLO world

/*
Write a function "passwordSafe" that takes two arguments: a string which will be the password, and a value which will be the "safe". "passwordSafe" should return a function that takes in a password as a string.
If that password doesn’t match the one originally provided, return the string “You have entered the wrong password”. If the passwords do match, return the safe.

Example:
const mySafe = passwordSafe('myPassword', 'My Super Secret');
mySafe('wrongPassword') -> "You have entered the wrong password"
mySafe('myPassword') -> "My Super Secret"
*/

// input: string
// output: function
function passwordSafe(str) {
  const password = str;
  
  return function innerSafe(strArg) {
    if (strArg === password) {
      return 'yay'
    } else {
      return 'boo'
    }
  }
}

passwordSafe()

// const password = string
// return function
	// input: string
	// output: string

	// check if stringArg === password
		// if so, return 'my super secret'
	// otherwise, return 'you have entered the wrong password'



