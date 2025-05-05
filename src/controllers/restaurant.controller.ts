import { Request, Response, NextFunction } from 'express';

export const search = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { message } = req.body;
    // TODO: convert message to json command
    // TODO: search for restaurants
    res.json([]);
  } catch (error) {
    next(error);
  }
};
