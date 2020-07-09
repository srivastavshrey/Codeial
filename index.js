const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const port = 8000;
app.use(express.urlencoded());
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./assets"));
app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use("/", require("./routes/index"));
app.listen(port, function (err) {
  if (err) {
    console.log(`Error!:${err}`);
    return;
  }
  console.log(`Server is running on port:${port}`);
});
