import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || '';

interface AuthenticatedRequest extends Request {
    userId?: number;
}

export function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.userId = (decoded as { userId: number }).userId;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'invalid token' });
    }
}
