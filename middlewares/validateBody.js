const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const validateFile = schema.validate(req.body);

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
// const { HttpError } = require("../helpers");

// const validateBody = (schema) => {
//   const func = (req, res, next) => {
//     const validateFile = schema.validate(req.body);

//     if (validateFile.error) {
//       if (Object.keys(req.body).length === 0) {
//         next(HttpError(400, `missing fields`));
//       } else {
//         const missingField = validateFile.error.details[0].path[0];
//         next(HttpError(400, `missing required ${missingField} field`));
//       }
//     } else if (schema === addSchema) {
//       const errorMessage = validateFile.error.details[0].message;
//       return next(HttpError(400, errorMessage));
//     }

//     next();
//   };
//   return func;
// };

// module.exports = validateBody;
