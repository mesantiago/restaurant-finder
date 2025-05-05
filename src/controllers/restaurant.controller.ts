import { Request, Response, NextFunction } from 'express';
import * as openai from '../connectors/openai';

export const search = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { message } = req.body;
    if (!message) {
      res.status(422).json({
        message: 'Invalid input'
      });
      return;
    }
    const parameters = await openai.parseRequest(message);
    // TODO: search for restaurants
    res.json(parameters);
  } catch (error) {
    next(error);
  }
};
