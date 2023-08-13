const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const validateFile = schema.validate(req.body);
    console.log(validateFile);

    if (validateFile.error) {
      if (Object.keys(req.body).length === 0) {
        next(HttpError(400, `missing fields`));
      } else {
        const missingField = validateFile.error.details[0].path[0];
        next(HttpError(400, `missing required ${missingField} field`));
      }
    }
    next();
  };
  return func;
};

module.exports = validateBody;
