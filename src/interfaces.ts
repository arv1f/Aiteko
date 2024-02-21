export interface User {
    name: string;
    password: string;
    url: string;
}
export interface UsersContextType {
    users: User[];
    addUser: (payload: User) => void;
    deleteUser: (userId: number) => void;
    getUserById: (id: number) => User;
    editUser: (id: number, newName: string, newPassword: string, url: string) => void;
}