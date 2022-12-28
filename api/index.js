var express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
const port = 80;

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
