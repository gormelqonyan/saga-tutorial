require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.port || 8000;

const mongoUri = process.env.mongoUri;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", require("./routhing/auth"));
app.use("/api/user", require("./routhing/user"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
