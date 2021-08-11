// const square = function (x) {
//   return x * x
// }

// const square = x => {
//   return x * x
// }

// Implicit return
const square = (x) => x * x;

console.log(square(5));

// arrow function does not bind this so this.name will come up as undefined
// const event = {
//   name: 'Birthday Party',
//   printGuestList: () => {
//     console.log(`Guest list for ${this.name}`)
//   }
// }

const event = {
  name: "Birthday Party",
  guestList: ["Bob", "Andrew", "Mike"],
  printGuestList() {
    console.log(`Guest list for ${this.name}`);

    // arrow functions don't bind it's own this value
    this.guestList.forEach((guest) =>
      console.log(`${guest} is attending ${this.name}`)
    );
  },
};

event.printGuestList();
