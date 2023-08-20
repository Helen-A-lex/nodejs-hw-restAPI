const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const {
  validateBody,
  isValidId,
  validateBodyFavorite,
} = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addOneContact);

router.delete("/:contactId", isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBodyFavorite(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);
module.exports = router;
