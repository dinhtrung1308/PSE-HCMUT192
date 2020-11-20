const express = require("express");
const router = express.Router();
const Customer = require("../models/Customers.model");

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
    const customer = new Customer({
      name: req.body.name,
      password: req.body.password,
      phone: req.body.phone,
    })
    try {
      const saveCustomer = await Customer.save();
      res.json(saveCustomer);
    } catch (err) {
      res.json({ message: err });
    }
});

module.exports = router;
