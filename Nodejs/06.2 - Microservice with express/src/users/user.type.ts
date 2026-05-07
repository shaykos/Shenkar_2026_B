export interface User {
    id: string;
    email: string;
    name: string;
    password: string,
    role: 'admin' | 'customer';
    createdAt: Date;
}

export interface CreateUserDTO {
    email: string;
    name: string;
    password: string
}