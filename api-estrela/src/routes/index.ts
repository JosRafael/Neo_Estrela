import { Router } from "express";
import { userRoutes } from "./user.routes";
import { premiumRoutes } from "./premium.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/premium", premiumRoutes);

export { routes };
