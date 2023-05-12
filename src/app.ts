import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { loginRoutes } from "./routes/login.routes";
import { usersRoutes } from "./routes/user.routes";
import { categoriesRoutes } from "./routes/category.routes";
import { realEstateRoutes } from "./routes/realEstate.routes";
import { schedulesRoutes } from "./routes/schedules.routes";
import { HandleError } from "./error";

const app = express();
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", schedulesRoutes);

app.use(HandleError);

export default app;
