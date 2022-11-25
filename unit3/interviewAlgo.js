// arrow func 
// input: array of numbers
// output: array of only even numbers

const filterEvenNums = (arr) => {
  return arr.filter((element) => typeof element === 'number' && element % 2 === 0);
}

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(filterEvenNums(testArr)); // [2, 4, 6, 8]

/*
declare a function that takes in an array and returns:
string with “!” at end if string
number * 2 if number
*/

// function 
// input: arr of strings or numbers
// ouput: arr of same length, with modified values (newArray)

function modifyArray(arr) {
  return arr.map((element) => {
    if (typeof element === 'string') {
      return element += '!';
    } 
    return element * 2;
  });
}

// const testArr = [2, 'Hey dawg', 3, 'Sup?', 10] 
// console.log(modifyArray(testArr)); //[4, 'Hey dawg!', 6, 'Sup?!', 20]

/*
make a function that takes in an object and mutates it
look through every value and if it’s a number, re-assign the value with + 100
if it’s not a number, log “{value} is not a number”
*/

function modifyObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] += 100;
    } else {
      console.log(`${obj[key]} is not a number`)
    }
  }
}

const testObj = {
  1: 100,
  2: 'Hideaki',
  3: 900,
  4: 'My credit score'
}

modifyObj(testObj);
console.log(testObj); // {1: 200, 2: 'Hideaki', 3: 1000, 4: 'My credit score'}