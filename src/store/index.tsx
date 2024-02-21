import { PropsWithChildren, createContext, useContext, useState } from "react";
import { User, UsersContextType } from "../interfaces";

export const UsersContext = createContext<UsersContextType | null>(null);

const UserProvider = ({ children }: PropsWithChildren) => {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (payload: User): void => {
        setUsers((user) => [...user, payload]);
    };
    const deleteUser = (userId: number): void => {
        setUsers((user) => user.filter((_, index) => index !== userId));
    };
    const getUserById = (id: number): User => {
        return users[id];
    };
    const editUser = (
        id: number,
        newName: string,
        newPassword: string,
        url: string
    ) => {
        setUsers((state) =>
            state.map((el, index) =>
                id === index
                    ? {
                        ...el,
                        name: newName,
                        password: newPassword,
                        url: url,
                    }
                    : el
            )
        );
    };

    return(
        <UsersContext.Provider value={{
            users,
            addUser,
            deleteUser,
            getUserById,
            editUser
        }}>{children}
        </UsersContext.Provider>
    )
};
export default UserProvider;
export const useUsersContext = () => useContext(UsersContext) as UsersContextType;