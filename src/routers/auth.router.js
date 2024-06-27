import express from "express";
const authRouter = express.Router();
import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { MESSAGES } from "../constants/message.constant.js";

authRouter.post("/sign-up", (req, res, next) => {
  try {
    const data = null;
    return res.status(HTTP_STATUS.CREATED).json({
      status: HTTP_STATUS.CREATED,
      message: "MESSAGES.AUTH.SIGN_UP.SUCCESS",
      data: data,
    });
  } catch (error) {
    next(error);
  }
});

export { authRouter };
