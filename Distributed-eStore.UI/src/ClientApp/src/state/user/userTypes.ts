export enum UserActionTypes {
    REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
    REGISTRATION_FAILED = "REGISTRATION_FAILED",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL",
    LOGOUT = "LOGOUT"
};

export interface IUser {
    accessToken: string;
    refreshToken: string;
    Id: string;
    role: string;
    claims: { [key: string]: number };
}

export interface IUserState {
    isLoggedIn: boolean;
    user: IUser | null;
}