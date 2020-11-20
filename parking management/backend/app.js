require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const clientRoute = require("./routes/client.route");
const customerRoute = require("./routes/customer.route");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("some string"));

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  } 
);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/customers", customerRoute);
app.use("/clients", clientRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
