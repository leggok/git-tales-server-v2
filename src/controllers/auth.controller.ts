import { Request, Response } from 'express';
import { authService } from '../services/auth.services.js';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await authService.createUser(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error: any) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error', error: error?.message });
  }
};