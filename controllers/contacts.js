const contacts = require("../models/contacts");
const { HttpError } = require("../helpers");
const dataValidate = require("../helpers/dataValidator");
const { ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addOneContact = async (req, res) => {
  const validateFile = dataValidate(req.body);
  if (validateFile.error) {
    const missingField = validateFile.error.details[0].path[0];
    throw HttpError(400, `missing required ${missingField} field`);
  }
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const updateById = async (req, res) => {
  const validateFile = dataValidate(req.body);
  if (validateFile.error) {
    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, `missing fields`);
    } else {
      const missingField = validateFile.error.details[0].path[0];
      throw HttpError(400, `missing required ${missingField} field`);
    }
  }
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  addOneContact: ctrlWrapper(addOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateById: ctrlWrapper(updateById),
};
