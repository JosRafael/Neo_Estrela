import jwt, { JwtPayload } from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || 'cwM2Q1Mi1iMzIw';

export function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, jwtSecret, { expiresIn: '168h' });
}

export function verifyToken(token: string): JwtPayload {
    return jwt.verify(token, jwtSecret) as JwtPayload;
  }