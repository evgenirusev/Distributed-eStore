import { CREATE_ORDER_URL } from "../../constants";
import axios, { AxiosResponse } from "axios";
import { IOrder } from "../../state/cart";

export const createOrder = (order: IOrder): Promise<AxiosResponse> => {
    return axios.post(CREATE_ORDER_URL, order);
}