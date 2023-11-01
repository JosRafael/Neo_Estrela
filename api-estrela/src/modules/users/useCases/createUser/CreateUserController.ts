import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({ email });

    return res.status(201).json(result);
  }
}
