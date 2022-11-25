console.log('JS is rearing to go')

const h1 = document.createElement('h1');
const bodyEl = document.querySelector('body');

h1.textContent = 'yeah boi!'
bodyEl.append(h1);

function funcA(input) {
  if (typeof input === “number”){
    funcB();
    console.log(‘hello!’);
  } else {
    console.log(‘hi!’);
    funcC();
    return;
  }
  console.log(‘good night!’);
}

function funcB() {
  console.log(‘greetings!’);
}

function funcC() {
  console.log(‘bye!’);
}

// argument for funcA 3 (number type)
// output: 'greetings'
// 'hello'
// 'good night'
// returns: undefined (void in other languages)

// input: '3'
// output:
// 'hi'
// 'bye'
// return: undefined (void);