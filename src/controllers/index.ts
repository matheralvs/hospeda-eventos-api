import { NextFunction, Request, Response } from "express";

export interface Controller {
  handle(request: Request, response: Response, next: NextFunction): Promise<Response>;
}
