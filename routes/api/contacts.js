const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const {
  validateBody,
  isValidId,
  validateBodyFavorite,
  authenticate,
} = require("../../middlewares");

const { schemas } = require("../../models/contact");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addOneContact
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBodyFavorite(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);
module.exports = router;
