const testNum = (num) => {
  return new Promise(function(resolve, reject) {
    if (num > 10) {
      resolve('Your number is greater than 10, good job!') 
    } else if (num < 10) {
      reject('Your number is less than 10')
    } else {
    resolve('You got it!') 
  }
  })
}

const makeAllCaps = (words) => {
  return new Promise(function(resolve, reject) {
    if(!words.every(word => typeof word === 'string')) {
      reject('There are elements in this array that are not strings')
    } else {
      resolve(words.map(word => word.toUpperCase()))
    }
  })
}

const sortWords = (word) => {
  return new Promise((resolve, request) => {
    if(word.length) {
      resolve(word.sort());
    } else {
      reject('Aint nothin here')
    }
  })
}

//What is .then() used for, and what is .catch() used for?

// .then() is a method used to return a rejected or resolved promise.
// .catch() is a method that returns a promise specifically dealing with rejected casses

//What are good use cases for Promises?

//Promises are used any time you are dealing with asynchronous operation. They allow your code to continue running despite the missing data.

//What other libraries/functions can you find that use Promises?

// Promises are used in Node.js in addition to the browser.