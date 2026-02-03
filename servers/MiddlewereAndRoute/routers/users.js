import express from "express";
import { requestInfo } from "../middleware/requestInfo.js";

const usersRouter = express();

usersRouter.use(requestInfo)
usersRouter.get("/", (req, res) => {
  const source = req.source;
  const requestTime = req.requestTime;

  res.json({
    message: "hello user route",
    source: source,
    requestTime: requestTime,
  });
});

export default usersRouter;
