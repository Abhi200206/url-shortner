import express from "express";
import urlRoutes from "./routes/url.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use("/api", urlRoutes);
app.use(errorHandler);

export default app;
