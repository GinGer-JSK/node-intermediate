import express from "express";
const authRouter = express.Router();
import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { MESSAGES } from "../constants/message.constant.js";
import { signUpValidator } from "../middlewares/validators/sign-up-validator.middleware.js";
import { prisma } from "../utils/prisma.util.js";
import bcrypt from "bcrypt";
import { HASH_SALT_ROUNDS } from "../constants/auth.constant.js";

authRouter.post("/sign-up", signUpValidator, async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const exiUser = await prisma.user.findUnique({ where: { email } });
    if (exiUser) {
      return res.status(HTTP_STATUS.CONFLICT).json({
        status: HTTP_STATUS.CONFLICT,
        message: MESSAGES.AUTH.COMMON.EMAIL.DUPLICATED,
      });
    }

    const hashPassword = bcrypt.hashSync(password, HASH_SALT_ROUNDS);
    const data = await prisma.user.create({
      data: { email, password: hashPassword, name },
    });
    data.password = undefined;
    return res.status(HTTP_STATUS.CREATED).json({
      status: HTTP_STATUS.CREATED,
      message: MESSAGES.AUTH.SIGN_UP.SUCCESS,
      data: data,
    });
  } catch (error) {
    next(error);
  }
});

authRouter.post("/sing-in", (req, res, next) => {
  try {
    next();
  } catch (error) {}
});

export { authRouter };
