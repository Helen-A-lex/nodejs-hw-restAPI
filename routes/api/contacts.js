const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody } = require("../../middlewares");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody, ctrl.addOneContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", validateBody, ctrl.updateById);

module.exports = router;
