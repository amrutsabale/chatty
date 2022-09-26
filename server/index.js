const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// Connect MongoDB Database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.error(error.message);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`);
});
