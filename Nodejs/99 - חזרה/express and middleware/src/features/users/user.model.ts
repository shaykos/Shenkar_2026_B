import type { User } from "./user.types.ts";

const allusers = new Array<User>();

export async function getAllusers(): Promise<User[]> {
    return allusers;
}

export async function registerUser(data: User): Promise<User> {
    let newUser: User = {
        ...data,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString()
    }
    allusers.push(newUser);
    return newUser;
}