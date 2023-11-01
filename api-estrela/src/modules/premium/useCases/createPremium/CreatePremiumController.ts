import { Request, Response } from "express";
import { CreatePremiumUseCase } from "./CreatePremiumUseCase";

export class CreatePremiumController {
    async handle(req: Request, res: Response) {
        const { email, name, telefone } = req.body;

        const createPremiumUseCase = new CreatePremiumUseCase();

        const result = await createPremiumUseCase.execute({ email, name, telefone });

        return res.status(201).json(result);
    }
}