// symantic HTML

//pass by reference
//pass by value

// create function
// input: num
// if input is not typeof num return null
// otherwise return num * 2

const multiplyByTwo = (num) => (typeof num === 'number') ? num * 2 : null;

// '7'
// 'string' !== 'number' //TRUE


// console.log(multiplyByTwo(2)); //4
// console.log(multiplyByTwo(0)); //0
// console.log(multiplyByTwo('6')); //null

// function
// input: object
// add new property 'color'
// output: object with added property
// if input is not an obj return 'input must be an object'

function addColor(obj) { 
  const newObj = {};
  // clone object look up
  // check if it's an obj
    // checking if it's an obj, and not an array
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    obj.color = 'poop brown';
    return obj;
  } else {
    return 'input must be an object';
  }
}
const testObj = {
  name: 'Hids',
  instrument: 'Bassoon',
  longTones: false
}

console.log(addColor(testObj)) // color: poop brown
console.log(addColor([1, 2])) // 'input must be an object'

