export enum UserActionTypes {
    REGISTER_SUCCESS = "REGISTER_SUCCESS",
    REGISTER_FAIL = "REGISTER_FAIL",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL",
    LOGOUT = "LOGOUT"
};

export interface IUser {
    accessToken: string;
    userId: string;
    role: string;
    claims: { [key: string]: number };
}

export interface IUserState {
    isLoggedIn: boolean;
    user: IUser | null;
}