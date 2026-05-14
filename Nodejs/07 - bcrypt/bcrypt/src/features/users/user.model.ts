import type { User } from "./user.types.ts";
import { allusers } from "./users.data.ts";
import { compare } from "bcrypt";

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

export async function loginUser(data: User): Promise<User | null> {
    let user = allusers.find(u => u.email == data.email);
    if (!user)
        return null;

    let passCheck = await compare(data.password, user.password);
    if (passCheck)
        return user;
    return null;
}