const express = require("express");
const router = express.Router();

// simple in-memory cart (for demo & viva)
let carts = {};

// Add to cart
router.post("/add", (req, res) => {
  const { userId, product } = req.body;

  if (!carts[userId]) {
    carts[userId] = [];
  }

  carts[userId].push(product);
  res.json(carts[userId]);
});

// Get cart
router.get("/:userId", (req, res) => {
  res.json(carts[req.params.userId] || []);
});

// Clear cart
router.delete("/:userId", (req, res) => {
  carts[req.params.userId] = [];
  res.json({ message: "Cart cleared" });
});

module.exports = router;
