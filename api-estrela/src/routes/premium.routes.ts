import { GetMoviesByReleaseDateController } from '../modules/premium/useCases/getPremium/getPremiumController';
import { CreatePremiumController } from "../modules/premium/useCases/createPremium/CreatePremiumController";
import { Router } from "express";

const createPremiumController = new CreatePremiumController();
const getPremiumByReleaseDateController = new GetMoviesByReleaseDateController();

const premiumRoutes = Router();

premiumRoutes.post("/", createPremiumController.handle);
premiumRoutes.get("/", getPremiumByReleaseDateController.handle);

export { premiumRoutes };
