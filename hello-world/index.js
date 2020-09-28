const express = require("express");
const path = require("path");
const productsRouter = require("./router/views/products");
const productsApiRouter = require("./router/api/products");

// app
const app = express();

// middleware
app.use(express.json());

//static files
app.use("/static", express.static(path.join(__dirname, "public")));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes
app.use("/products", productsRouter);
app.use("/api/products", productsApiRouter);

// redirect
app.get("/", (req, res) => {
  res.redirect("/products");
});

// init server
const server = app.listen(8000, function () {
  console.log(`Listening http://localhost:${server.address().port}`);
});
