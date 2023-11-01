import { Request, Response } from "express";
import {GetPremiumUseCase} from "./getPremiumUseCase";

export class GetMoviesByReleaseDateController{
    async handle(req:Request, res:Response){

        const getPremiumUseCase = new GetPremiumUseCase();

        const result = await getPremiumUseCase.execute();

        return res.status(200).json(result);
    }
}