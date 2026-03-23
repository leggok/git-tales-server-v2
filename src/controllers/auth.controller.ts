import { Request, Response } from 'express';
import { comparePassword, hashPassword } from '../utils/authHelpers.js';
import { usersService } from '../services/users.services.js';

class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const existingUser = await usersService.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const hashedPassword = await hashPassword(password);
      const user = await usersService.createUser({ name, email, password: hashedPassword });
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error: any) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error', error: error?.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await usersService.getUserByEmail(email);
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      
      const isPasswordValid = await comparePassword(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid password' });
      }
      
      res.status(201).json({ message: 'User logged in successfully', user });
    } catch (error: any) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Internal server error', error: error?.message || 'Unknown error' });
    }
  }
}

export const authController = new AuthController();