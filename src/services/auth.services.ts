import { User } from '../models/User.js';
import type { User as UserType } from '../types/user.js';
class AuthService {
  async createUser(user: UserType) {
    const newUser = await User.create(user);
    return newUser;
  }
}

export const authService = new AuthService();