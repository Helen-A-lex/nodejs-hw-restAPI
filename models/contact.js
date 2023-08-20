const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "Name field is required",
    "string.base": "Name field must be a string",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "any.required": "Email field is required",
      "string.base": "Email field must be a string",
    }),
  phone: Joi.string().required().messages({
    "any.required": "Phone field is required",
    "string.base": "Phone field must be a string",
  }),
  favorite: Joi.boolean().messages({
    "boolean.base": "Favorite field must be a boolean value",
  }),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "Favorite field is required",
    "boolean.base": "Favorite field must be a boolean value",
  }),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);
module.exports = {
  Contact,
  schemas,
};
