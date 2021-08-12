const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engines and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "John Smith",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "John Smith",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    message: "lorem ipsum",
    title: "Help",
    name: "John Smith",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It's 50 degrees",
    location: "Boston",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "John Smith",
    message: "Help article not found.",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "John Smith",
    message: "Page not found.",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});
