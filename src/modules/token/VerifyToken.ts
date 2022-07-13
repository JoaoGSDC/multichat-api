import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function verifyJWT(req: any, res: Response, next: NextFunction) {
  const token: string = req.headers["x-access-token"] as string;
  jwt.verify(token, process.env.SECRET ?? "", (err: any, decoded: any) => {
    if (err) return res.status(401).end();

    req.userId = decoded.userId;
    next();
  });
}
