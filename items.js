const express = require("express");
const Item = require("../models/item");

const router = express.Router();

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find().populate("seller", "email");
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new item
router.post("/", async (req, res) => {
  const { name, description, price, seller } = req.body;
  try {
    const newItem = new Item({ name, description, price, seller });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
