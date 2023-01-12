const express = require("express");

const app = express();

app.enable("case sensitive routing");

app.all("/about", (req, res) => {
  res.send("This is home page");
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
