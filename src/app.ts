import cors from "cors";
import { AppError } from "./utils/appError";
import express, { Application } from "express";
import weaponsRouter from "./routes/weapon.route";
import { globalErrorHandler } from "./controllers/error.controller";
import userRouter from "./routes/user.route";
import authRouter from "./routes/auth.route";

const app: Application = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/weapon", weaponsRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.all("*", (req, _res, next) =>
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
);

app.use(globalErrorHandler);

export default app;
