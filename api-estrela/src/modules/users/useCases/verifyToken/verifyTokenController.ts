import { Request, Response } from "express";
import { VerifyTokenUseCase } from "./verifyTokenUseCase";

export class VerifyTokenController {
  async handle(req: Request, res: Response) {
    const { token } = req.body;

    const verifyTokenUseCase = new VerifyTokenUseCase();

    const result = await verifyTokenUseCase.execute({ token });

    return res.status(201).json(result);
  }
}
