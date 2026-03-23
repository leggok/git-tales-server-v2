import { User } from '../models/User.js';
import type { RegisterUser } from '../types/user.js';
class AuthService {
  async createUser(user: RegisterUser) {
    const newUser = await User.create(user);
    return newUser;
  }
}

export const authService = new AuthService();