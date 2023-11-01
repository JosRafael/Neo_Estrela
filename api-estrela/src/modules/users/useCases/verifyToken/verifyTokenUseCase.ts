import { VerifyTokenDTO } from "./../../dtos/VerifyTokenDTO";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "cwM2Q1Mi1iMzIw";

export class VerifyTokenUseCase {
    async execute({ token }: VerifyTokenDTO) {
        if (!token) {
            return { valid: false, message: "Token não fornecido" };
        }

        try {
            const decoded: any = jwt.verify(token, jwtSecret);
            const currentTimestamp = Math.floor(Date.now() / 1000);

            if (decoded.exp && decoded.exp > currentTimestamp) {
                return {
                    valid: true,
                    message: "Token válido"
                };
            }
        } catch (err) {
            return {
                valid: false,
                message: "Token inválido ou expirado"
            };
        }
    }
}
