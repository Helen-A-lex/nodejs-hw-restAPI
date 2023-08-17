const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody } = require("../../middlewares");
const schemas = require("../../helpers/dataValidator");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addOneContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;
