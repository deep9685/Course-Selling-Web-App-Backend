import express from 'express';

const app = express();

// routes import
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js"

// routes declaration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);

export {app};