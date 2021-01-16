import { CREATE_ORDER_URL } from "../../constants";
import axios, { AxiosResponse } from "axios";
import { IOrder } from "../../state/cart";

export const createOrder = (order: IOrder): Promise<AxiosResponse> => {
    const userData = localStorage.getItem("user");

    if (userData && JSON.parse(userData)["accessToken"]) {
        return axios.post(CREATE_ORDER_URL, order, {
            headers: { Authorization: `Bearer ${userData["accessToken"]}` }
        });
    }

    console.error("user is not logged in!");
}