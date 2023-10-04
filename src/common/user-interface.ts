export interface IUserResponse {
    name: string;
    email: string;
};

export interface ILoginUser {
    email: string;
    password: string;
};

export interface ISignUpUser {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
};