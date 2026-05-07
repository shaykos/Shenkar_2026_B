import type { User, CreateUserDTO } from './user.type.ts';

const usersDb: User[] = new Array<User>();

export async function createUser(data: CreateUserDTO): Promise<User> {
    let u: User = {
        id: crypto.randomUUID(),
        ...data,
        role: 'admin',
        createdAt: new Date()
    }

    usersDb.push(u);
    return u;
}

export async function getUsers(): Promise<User[]> {
    return usersDb;
}

export async function getUser(id: string): Promise<User | null> {
    let u = usersDb.find(user => user.id == id);
    return u || null;
}

