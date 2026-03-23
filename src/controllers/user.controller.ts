import { Request, Response } from 'express';
import { User } from '../models/User.js';
import { usersService } from '../services/users.services.js';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};