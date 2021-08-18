const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 5, 6]);
    reject("Error");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("Success", result);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise --> pending --> fulfilled | rejected
