import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePremiumDTO } from "../../dtos/CreatePremiumDTO";

import { Premium } from "@prisma/client";

export class CreatePremiumUseCase {
  async execute({ email, name, telefone }: CreatePremiumDTO): Promise<Premium> {
    const premiumAlreadyExists = await prisma.premium.findUnique({
      where: {
        email,
      },
    });

    if (premiumAlreadyExists) {
      throw new AppError("User is already premium!");
    }

    const premium = await prisma.premium.create({
      data: {
        email,
        name,
        telefone,
      },
    });

    return premium;
  }
}