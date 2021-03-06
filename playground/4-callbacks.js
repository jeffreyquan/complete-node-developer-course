// setTimeout(() => {
//   console.log("Two seconds are up")
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']

// const shortNames = names.filter(name => name.length <= 4)

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     }

//     callback(data)
//   }, 2000)
// }

// geocode("hello", (data) => {
//   console.log(data)
// })

const add = (numberOne, numberTwo, callback) => {
  setTimeout(() => {
    callback(numberOne + numberTwo);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});

// Use to compare with 8-promises.js

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is my error", undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});
