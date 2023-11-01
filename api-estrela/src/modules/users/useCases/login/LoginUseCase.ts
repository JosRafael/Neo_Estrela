import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { LoginDTO } from "../../dtos/LoginDTO";

import { generateToken } from "../../../../utilities/jwtUtils";

export class LoginUseCase {
  async execute({ email }: LoginDTO): Promise<object> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        premium_rent: {
          select: {
            email: true,
          },
        }
      },
    });

    if (!user) {
      throw new AppError("User not exists");
    }

    const constructorToken = {
      userId: user.id,
      email: user.email,
    };

    const token = generateToken(constructorToken);

    const result = {
      userId: user.id,
      email: user.email,
      pro: user.premium_rent.length,
      token: token,
    };

    return result;
  }
}
