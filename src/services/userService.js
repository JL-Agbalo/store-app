import { users } from "../data/users/users";
import { profiles } from "../data/users/profile";
import { roles } from "../data/users/roles";

const userRoles = [
  { user_id: 1, role_id: 1 },
  { user_id: 2, role_id: 2 },
  { user_id: 3, role_id: 2 },
  { user_id: 4, role_id: 2 },
  { user_id: 5, role_id: 2 },
  { user_id: 6, role_id: 2 },
];

export const userService = {
  // User CRUD operations
  getAllUsers() {
    return users;
  },

  getUserById(userId) {
    return users.find((user) => user.id === userId);
  },

  isAdmin(userId) {
    return this.hasRole(userId, "admin");
  },
};
