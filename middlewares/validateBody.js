// const dataValidate = require("../helpers/dataValidator");
// const { HttpError } = require("../helpers");

// const validateBody = (dataValidate) => {
//   const func = (req, res, next) => {
//     const validateFile = dataValidate(req.body);
//     if (validateFile.error) {
//       if (Object.keys(req.body).length === 0) {
//         next(HttpError(400, `missing fields`));
//       } else {
//         const missingField = validateFile.error.details[0].path[0];
//         next(HttpError(400, `missing required ${missingField} field`));
//       }
//     }
//     next();
//   };
//   return func;
// };
// module.exports = validateBody;

// const validateBody = (schema) => {
//   const func = (req, res, next) => {
//     const { error } = schema.validate(reg.body);
//     if (error) {
//       next(HttpError(400, error.message));
//     }
//     next();
//   };
//   return func;
// };
// module.exports = validateBody;
