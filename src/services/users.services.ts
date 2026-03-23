import { User } from '../models/User.js';
import type { RegisterUser } from '../types/user.js';
class UsersService {
  async createUser(user: RegisterUser) {
    const newUser = await User.create(user);
    return newUser;
  }

  async getUserByEmail(email: string) {
    const user = await User.findOne({ email });
    return user;
  }
}

export const usersService = new UsersService();