const express = require("express");
const { validateBody, authenticate } = require("../middlewares");

const { schemas } = require("../models/user");

const ctrl = require("../controllers/users");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.post("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.getCurrent);
router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateUserSubscriptionSchema),
  ctrl.updateSubscription
);
module.exports = router;
