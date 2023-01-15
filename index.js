const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  res.send("Test page");
});

app.get("/about", (req, res) => {
  res.redirect("/test");
  res.end();
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
