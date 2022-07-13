import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IRequest extends Request {
  userId: string;
}

export function verifyJWT(req: IRequest, res: Response, next: NextFunction) {
  const token: string = req.headers["x-access-token"] as string;
  jwt.verify(token, process.env.SECRET ?? "", (err: any, decoded: any) => {
    if (err) return res.status(401).end();

    req.userId = decoded.userId;
    next();
  });
}
