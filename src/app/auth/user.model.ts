export interface User {
    login: string,
    password: string
}

export interface LoginUser {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
}