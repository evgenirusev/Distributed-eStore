import { IUserState } from "./userTypes";
import { ReduxAction } from '../index';

const initialState: IUserState = {
    accessToken: "",
    userId: "",
    role: "",
    claims: {}
};

export const reducer = (state: IUserState = initialState, incomingAction: ReduxAction): IUserState => {
    return null;
};