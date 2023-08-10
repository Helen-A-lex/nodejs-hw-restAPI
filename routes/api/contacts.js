const express = require("express");
const contacts = require("../../models/contacts");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);

  // res.status(500).json({ message: "Server error" });
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "Home" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
