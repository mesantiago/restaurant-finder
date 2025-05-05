import { Request, Response, NextFunction } from 'express';
import * as openai from '../connectors/openai';
import * as foursquare from '../connectors/foursquare';

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
    const restaurants = await foursquare.findDiningPlaces(parameters);
    res.json(restaurants);
  } catch (error) {
    next(error);
  }
};
