import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

import { generateToken } from "../../../../utilities/jwtUtils";

export class CreateUserUseCase {
  async execute({ email }: CreateUserDTO): Promise<object> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const user = await prisma.user.create({
      data: {
        email,
      },
    });

    const constructorToken = {
      userId: user.id,
      email: user.email,
    };

    const token = generateToken(constructorToken);

    const result = {
      userId: user.id,
      email: user.email,
      pro: 0,
      token: token,
    };

    return result;
  }
}
