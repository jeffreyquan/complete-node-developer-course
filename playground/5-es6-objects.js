// Object property shorthand

const name = "Andrew";
const age = 27;

const user = {
  name: name,
  age: age,
  location: "Sydney",
};

console.log(user);

// Using shorthand syntax
const shorthandUser = {
  name,
  age,
  location: "Sydney",
};

console.log(shorthandUser);

// Object destructing

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// rating has a default value
// const { label: productLabel, price, stock, salePrice, rating = 5 } = product;

// console.log(productLabel)
// console.log(price)
// console.log(stock)
// console.log(salePrice)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type);
  console.log(label);
  console.log(stock);
};

transaction("order");

console.log("-----------------------------");
transaction("order", product);
