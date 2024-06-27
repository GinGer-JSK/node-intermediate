import Joi from "joi";
import { MESSAGES } from "../../constants/message.constant.js";

const schema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": MESSAGES.AUTH.COMMON.EMAIL.REQUIRED,
    "string.email": MESSAGES.AUTH.COMMON.EMAIL.INVALID_FORMAT,
    // "string.empty": MESSAGES.AUTH.COMMON.EMAIL.EMPTY,
  }),
  password: Joi.string().required().min(6).messages({
    "any.required": MESSAGES.AUTH.COMMON.PASSWORD.REQUIRED,
    "string.min": MESSAGES.AUTH.COMMON.PASSWORD.MIN_LENGTH,
  }),
  passwordConfirm: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.required": MESSAGES.AUTH.COMMON.PASSWORDRE.REQUIRED,
    "any.only": MESSAGES.AUTH.COMMON.PASSWORDRE.NOT_MATCHED_WITH_PASSWORD,
  }),
  name: Joi.string().required().messages({
    "any.required": MESSAGES.AUTH.COMMON.NAME.REQUIRED,
  }),
});

export const signUpValidator = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
