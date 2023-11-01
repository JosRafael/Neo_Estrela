import { prisma } from "../../../../prisma/client";

export class GetPremiumUseCase {
  async execute() {
    const premium = await prisma.premium.findMany({
      select: {
        email: true,
      },
    });

    return premium;
  }
}
