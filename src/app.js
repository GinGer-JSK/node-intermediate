import express from "express";
import { SERVER_PORT } from "./constants/env.constant.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(SERVER_PORT, () => {
  console.log(`ServerOpen at ${SERVER_PORT}`);
});

app.get("/", (req, res) => {
  req.send("dfsdf");
});

app.use(errorHandler);
