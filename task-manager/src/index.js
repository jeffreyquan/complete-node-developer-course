const express = require("express");
require("dotenv").config();
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Middleware: new request -> do something -> run route handler

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});