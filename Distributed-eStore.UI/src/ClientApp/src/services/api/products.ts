import { PRODUCTS_URL } from "../../constants"
import { IProduct } from "../../state/products/"
import axios, { AxiosResponse } from "axios";

export const getAllProducts = (): Promise<AxiosResponse<IProduct[]>> => {
    return axios.get<IProduct[]>(PRODUCTS_URL);
}

export const getProductById = (productId: string): Promise<AxiosResponse<IProduct>> => {
    return axios.get<IProduct>(`${PRODUCTS_URL}/${productId}`);
}