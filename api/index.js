import express from "express";
let PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});