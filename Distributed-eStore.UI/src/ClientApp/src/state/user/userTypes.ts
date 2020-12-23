export enum UserActionTypes {
    REQUEST_ALL_ARRIVAL = 'REQUEST_ALL_ARRIVAL',
    REQUEST_BY_ID_ARRIVAL = 'REQUEST_BY_ID_ARRIVAL',
    SELECT_PRODUCT_COLOR = 'SELECT_PRODUCT_COLOR'
};

export interface IUserState {
    accessToken: string;
    userId: string;
    role: string;
    claims: { [key: string]: number };
}