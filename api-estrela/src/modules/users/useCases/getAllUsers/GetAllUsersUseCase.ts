import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
export class GetAllUsersUseCase {
  async execute(): Promise<User[]> {
    const users = await prisma.user.findMany({
      include: {
        premium_rent: {
          select: {
            email: true,
          },
        }
      },

    });

    return users;
  }
}
