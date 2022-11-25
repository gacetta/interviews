// - INTERVIEWEE'S NAME: Michael Gacetta
// - INTERVIEWEE'S EMAIL: michael.gacetta@gmail.com
// - PREFERRED COHORT: LA (2023)






/*
Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.

example:
const iRemember = memoryMaker();
iRemember('hello'); -> ['hello']
iRemember(1); -> ['hello', 1]
iRemember('world'); -> ['hello', 1, 'world']
iRemember(true); -> ['hello', 1, 'world', true]
*/

// function memoryMaker
// input: none
// output: function
function memoryMaker() {
  // declare outputArr
  const outputArr = [];
  return (anyValue) => {
    // add value to outputArr
    outputArr.push(anyValue);
    return outputArr;
  }
}

// const iRemember = memoryMaker();
// console.log(iRemember('hello')); //-> ['hello']
// console.log(iRemember(1)); //-> ['hello', 1]
// console.log(iRemember('world')); //-> ['hello', 1, 'world']
// console.log(iRemember(true)); //-> ['hello', 1, 'world', true]


/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.

Example: 
sumAllElements([1,2,3,4], 10) -> 20

Note: Do NOT use any native JS methods, or loops
*/

// function sumAllElements
// inputs: arrOfNum, sum, index = 0
// output: number
function sumAllElements(arr, sum, index = 0) {
  if (arr[index] === undefined) {
    return sum;
  } else {
    sum += arr[index]
    return sumAllElements(arr, sum, index + 1);
  }
}

// console.log(sumAllElements([1, 2, 3, 4], 10)) //-> 20




/*
Write a function 'anagrams' that produces all possible anagrams of a string and outputs them as an array.
Example:
console.log(anagrams('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
*/

// function anagrams
// input: string of any length
// output: arr

function anagrams(str) {
	const outputArr = [];
  const stringArr = str.split('');
  
  		// aa is constant - bc, then cb
  		// ab is constant - ac, then ca
  		// ac is constant - ab, then ba
  		// ba is constant - ac, then ca
  		// bc us constant - aa, then aa
  		// ca is constant - ab, then ba
  		// cb is constant - aa, then aa

  const newStr = 'aabc';
  if (!outputArr.includes(newStr)) {
    outputArr.push(newStr)
  }
  
  return outputArr
}

// declare stringArr = arr.split('');
// declare outputArr to store all possibile anagrams
    
// create a new combo *THIS IS MY ISSUE*
    // check if outputArr includes that combo
      // if does not, push that combo to outputArr

// after creating all possibilities, return outputArr



// recursion
// a + recursive (abc)
	// a + recursive (bc)
		// b + recursive (c)

/*
index points to 0 //a
	second index points to 1 //a
		until there are only two characters

[a, a, b, c]
loop - index 0 -a is the first char
	a b c -> aabc
	b c a - abca
	c a b - acab
loop -index 1-  a is the first
	abc - aabc
	bca -abca
	cab - acab
loop 

[a, b, c]
loop
a - [b, c]
abc, acb
b - [a, c]
bac, bca
c - [a, b]
cab, cba

[a, b, c, d]
a - [b, c, d]
abcd, acdb, adbc, adcb, acbd, abdc
*/


/*
Write a function 'anagrams' that produces all possible anagrams of a string and 
outputs them as an array.
Example:
console.log(anagrams('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
*/

/*

function anagrams
input: string
output: array

generatedPermutations   // array storing all permutations
currentPermutation      // the current permutation
elementsToPermutate     // the rematining elements to permutate

  // inner function permutate
  // input: nextPermutation, remainingElements
  // output: none, sideEffects - modifies generatedPermutations

  // check if elementsToPermuate is empty
  // if NOT empty - RECURSIVE CASE
    // loop over elementsToPermutate
      // grab element
      // nextPermuation = currentPermutation + element
      // remainingElements = remove element from elementsToPermutate
      // call permutate(nextPermuation, remainingElements)
  // if elementsToPermutate IS empty - BASE CASE
    // check if generatedPermutations includes currentPermutation
    // if not, add currentPermuation to generatedPermutations

return generatedPermutations


[a, b, c, d]
a - [b,c,d]
a - b - [c,d]
a - b - c - [d]
a - b - d - [c]
a - c - [b,d]
a - c - b - [d]
a - c - d - [b]
a - d - [bc]
a - d - b - [c]
a - d - c - [b]
b - [a,c,d]
b - a - [c,d]
b - a - c - [d]
b - a - d - [c]
b - c - [a,d]
b - c - a - [d]
b - c - d - [a]
etc...

*/


/*
Write a function 'anagrams' that produces all possible anagrams of a string and 
outputs them as an array.
Example:
console.log(anagrams('aabc')); -> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
*/

// help: https://www.baeldung.com/cs/array-generate-all-permutations

function anagrams(str) {
  const generatedPermutations = [];       // arr to store all permutations
  const arrToPermutate = str.split('');   // store elements to permutate in an arr
  permutate('', arrToPermutate);          // call inner recursive func with valid arguments
  return generatedPermutations;           // return the arr of permutations

  // inner recursive function
  // input: str, arr
  // output: none
  // sideEffects: modifies generatedPermutations
  function permutate(currentPermuation, elementsToPermutate) { 
    if (elementsToPermutate.length !== 0) {                       // RECURSIVE CASE
      elementsToPermutate.forEach((element, index) => {           // loop over elementsArr
        const nextPermutation = currentPermuation + element;      // create next Perm.
        const remainingElements = elementsToPermutate.slice();    // create remainingElements
        remainingElements.splice(index, 1);                       // remove current element
        permutate(nextPermutation, remainingElements);            // recursive call
      })
    } else {                                                      // BASE CASE - if no more elements to permutate
      if (!generatedPermutations.includes(currentPermuation)) {   // does perm. already exist?
        generatedPermutations.push(currentPermuation)             // add to outputArr
      }
    }
  }
}

console.log(anagrams('aabc')); //-> [ 'aabc', 'aacb', 'abac', 'abca', 'acab', 'acba', 'baac', 'baca', 'bcaa', 'caab', 'caba', 'cbaa' ]
