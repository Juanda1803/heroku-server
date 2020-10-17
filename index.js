const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log(req.method);
//   next();
// });

// app.use((req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/see-image", (req, res) => {
  res.sendFile(__dirname + "/src/assets/static/javascript.png");
});

app.get("/about-me", (req, res) => {
  res.send("about me");
});

app.get("/skills", (req, res) => {
  res.send("skills");
});

app.listen(process.env.PORT || 3000);
console.log("http://localhost:3000");
