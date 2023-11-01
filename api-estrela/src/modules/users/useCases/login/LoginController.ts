import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  async handle(req: Request, res: Response) {
    const { email } = req.body;

 
      const loginUseCase = new LoginUseCase();

      const result = await loginUseCase.execute({
        email,
      });

      return res.status(200).json(result);
   
  }
}
