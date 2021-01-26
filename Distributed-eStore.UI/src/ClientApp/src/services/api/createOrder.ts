import { CREATE_ORDER_URL } from "../../constants";
import axios, { AxiosResponse } from "axios";
import { IOrder } from "../../state/cart";
import { IUser } from "../../state/user";

export const createOrder = (order: IOrder): Promise<AxiosResponse> => {
    const userData: string | null = localStorage.getItem("user");

    if (userData) {
        const parsedUserData: IUser = JSON.parse(userData);

        if (parsedUserData["accessToken"]) {
            return axios.post(`host.docker.internal/${CREATE_ORDER_URL}`, order, {
                headers: { Authorization: `Bearer ${parsedUserData["accessToken"]}` }
            });
        }
    }

    throw "user is not logged in!";
}