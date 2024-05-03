const express = require("express");
const app = express();

const PORT = 3000;

app.use("/", (req, res) => res.send("server is working fine"));

app.listen(PORT, () =>
  console.log(`local server is running on: http://localhost:${PORT}`)
);
