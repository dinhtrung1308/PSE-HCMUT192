const express = require("express");
const router = express.Router();
const Clients = require("../models/Clients.model");

router.get("/", async (req, res) => {
  try {
    console.log("P");
    const clients = await Clients.find();
    res.json(clients);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const client = new Clients({
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
    // location: req.body.location,
  });
  try {
    const saveClient = await client.save();
    res.json(saveClient);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:clientId", async (req, res) => {
  try {
    const client = await Client.findById(req.params.clientId);
    res.json(client);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:clientId", async (req, res) => {
  try {
    const removedClient = await Client.remove({ _id: req.params.clientId });
    res.json(removedClient);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:clientId", async (req, res) => {
  try {
    const updatedClient = await Client.updateOne(
      { _id: req.params.clientId },
      { $set: { name: req.body.name } }
    );
    res.json(updatedClient);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
