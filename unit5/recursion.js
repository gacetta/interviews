// implement flatten array such that 

// input - [1, 3, true, [[[3]]], [['h1']]]
// output - [1, 3, true, 3, 'hi']

// function flattenArray(arr, outputArr = []) {
//   // iterate over the array
//   arr.forEach((element) => {
//     // BASE CASE - if the element is not array
//     if (!Array.isArray(element)) {
//       outputArr.push(element)
//     } else {
//       // RECURSIVE CASE - element is an array
//       flattenArray(element, outputArr)
//     }
//   })
//   return outputArr;
// }

function flattenArray(arr) {
  const outputArr = [];
  innerFlattenArray(arr);
  return outputArr;

  // iterate over the array
  function innerFlattenArray(arr) {
    arr.forEach((element) => {
      // BASE CASE - if the element is not array
      if (!Array.isArray(element)) {
        outputArr.push(element)
      } else {
        // RECURSIVE CASE - element is an array
        innerFlattenArray(element, outputArr)
      }
    })
  }
}


console.log(flattenArray([1, 3, true, [[[3]]], [['h1']]]));
// [1, 3, true, 3, 'h1']