import { Request, Response } from 'express';
import { User } from '../models/User.js';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await User.create({ name: req.body.name });
  res.status(201).json(user);
};