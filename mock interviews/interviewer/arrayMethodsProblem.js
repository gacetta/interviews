/* 
create a function squareList that takes an array of real numbers as an argument.
the function should return a new array containing the squares of ONLY the positive integers.
squareList can use any combination of `map()`, `filter()`, and `reduce()`
NOTE: decimal numbers are not integers

REQUIREMENTS: you should not use any kind of `for` or `while` loops, or `forEach()` method.
LEVEL 1 - use any array method(s).
LEVEL 2 - must use reduce()
LEVEL 3 - use method chaining for one liner.
*/


// console.log(squareList([-3, 4.8, 5, 3, -3.2])) // [25, 9]
// console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])) //[16, 1764, 36].
// console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])) //[9, 100, 49].



/* forEach
Create a function that takes in an array of cities-states-stateAbbrviations as strings.
Format each city correctly (e.g. Olympia, WA) and log to the console

const cityArray = [ 
  'hell-michigan-mi',
  'dinosaur-colorado-co',
  'fries-virginia-va',
  'okay-oklahoma-ok',
]

// 'Hell, MI'
// 'Dinosaur, CO'
// 'Fries, VA'
// 'Okay, OK'

Split string to array was good pseudo code (changed to convert str to array)

Filter
Create a function that takes in an array of capital cities as objects.
It should return an array of objects containing only those capital cities that have more than one word in the name
or are in a state that starts with the letter 'W'
*/
var stateCapitals = [
	{ name: 'Montgomery', stateAbbrev: 'AL' },
	{ name: 'Juneau', stateAbbrev: 'AK' },
	{ name: 'Phoenix', stateAbbrev: 'AZ' },
	{ name: 'Little Rock', stateAbbrev: 'AR' },
	{ name: 'Sacramento', stateAbbrev: 'CA' },
	{ name: 'Denver', stateAbbrev: 'CO' },
	{ name: 'Hartford', stateAbbrev: 'CT' },
	{ name: 'Dover', stateAbbrev: 'DE' },
	{ name: 'Tallahassee', stateAbbrev: 'FL' },
	{ name: 'Atlanta', stateAbbrev: 'GA' },
	{ name: 'Honolulu', stateAbbrev: 'HI' },
	{ name: 'Boise', stateAbbrev: 'ID' },
	{ name: 'Springfield', stateAbbrev: 'IL' },
	{ name: 'Indianapolis', stateAbbrev: 'IN' },
	{ name: 'Des Moines', stateAbbrev: 'IA' },
	{ name: 'Topeka', stateAbbrev: 'KS' },
	{ name: 'Frankfort', stateAbbrev: 'KY' },
	{ name: 'Baton Rouge', stateAbbrev: 'LA' },
	{ name: 'Augusta', stateAbbrev: 'ME' },
	{ name: 'Annapolis', stateAbbrev: 'MD' },
	{ name: 'Boston', stateAbbrev: 'MA' },
	{ name: 'Lansing', stateAbbrev: 'MI' },
	{ name: 'Saint Paul', stateAbbrev: 'MN' },
	{ name: 'Jackson', stateAbbrev: 'MS' },
	{ name: 'Jefferson City', stateAbbrev: 'MO' },
	{ name: 'Helena', stateAbbrev: 'MT' },
	{ name: 'Lincoln', stateAbbrev: 'NE' },
	{ name: 'Carson City', stateAbbrev: 'NV' },
	{ name: 'Concord', stateAbbrev: 'NH' },
	{ name: 'Trenton', stateAbbrev: 'NJ' },
	{ name: 'Santa Fe', stateAbbrev: 'NM' },
	{ name: 'Albany', stateAbbrev: 'NY' },
	{ name: 'Raleigh', stateAbbrev: 'NC' },
	{ name: 'Bismarck', stateAbbrev: 'ND' },
	{ name: 'Columbus', stateAbbrev: 'OH' },
	{ name: 'Oklahoma City', stateAbbrev: 'OK' },
	{ name: 'Salem', stateAbbrev: 'OR' },
	{ name: 'Harrisburg', stateAbbrev: 'PA' },
	{ name: 'Providence', stateAbbrev: 'RI' },
	{ name: 'Columbia', stateAbbrev: 'SC' },
	{ name: 'Pierre', stateAbbrev: 'SD' },
	{ name: 'Nashville', stateAbbrev: 'TN' },
	{ name: 'Austin', stateAbbrev: 'TX' },
	{ name: 'Salt Lake City', stateAbbrev: 'UT' },
	{ name: 'Montpelier', stateAbbrev: 'VT' },
	{ name: 'Richmond', stateAbbrev: 'VA' },
	{ name: 'Olympia', stateAbbrev: 'WA' },
	{ name: 'Charleston', stateAbbrev: 'WV' },
	{ name: 'Madison', stateAbbrev: 'WI' },
	{ name: 'Cheyenne', stateAbbrev: 'WY' }
];


function filterCities(array) {
  return array.filter(({name, stateAbbrev}) => {
    const isMultipleWords = name.includes(' ');
    const isWName = stateAbbrev[0] === 'W'
    return (isMultipleWords || isWName)
  })
}

console.log(filterCities());

/*
Map
The surface area of a sphere is equal to 4 * pi * r squared
Create a function that takes an array of radii (numbers) as an input.
Calculate the surface area of a sphere for each given radii.
return an array containing these values to two decimal points.

[3, 70, 2.5, .66, 0, 2400, 1]
*/

// function sphereMap(arr) {
//   return arr.map((element) => {
//     return surfaceAreaSphere(element).toFixed(2);
//   })

//   function surfaceAreaSphere(num) {
//     return 4 * Math.PI * Math.pow(num, 2);
//   }
// }

// console.log(sphereMap([3, 70, 2.5, .66, 0, 2400, 1]));