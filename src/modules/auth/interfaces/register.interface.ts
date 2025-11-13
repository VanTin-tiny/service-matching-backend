
export interface RegisterInput {
    email?: string;
    phone?: string;
    fullName?: string;
    password?:string
}

export interface RegisterResult {
    id: string;
    email?: string;
    phone?: string;
    fullName?: string
}
