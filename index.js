const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
      data: 'this is app 01'
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
