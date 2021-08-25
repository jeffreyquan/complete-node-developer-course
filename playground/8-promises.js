// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve([1, 5, 6]);
//     reject("Error");
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log("Success", result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise --> pending --> fulfilled | rejected

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

// Promise chaining

add(1, 1)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((e) => {
    console.log(e);
  });
