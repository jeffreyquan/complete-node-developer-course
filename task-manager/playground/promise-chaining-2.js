require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("611dfe3198e993de3300c2ab")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("611dfe3198e993de3300c2ab")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
