import { User } from '../models/User.js';
import type { User as UserType } from '../types/user.js';
class UsersService {
  async createUser(user: UserType) {
    const newUser = await User.create(user);
    return newUser;
  }
}

export const usersService = new UsersService();