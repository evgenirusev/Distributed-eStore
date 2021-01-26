import { PRODUCTS_URL, localhostUrl } from "../../constants"
import { IProduct } from "../../state/products/"
import axios, { AxiosResponse } from "axios";

export const requestProducts = (queryParams?: Record<string, string>): Promise<AxiosResponse<IProduct[]>> => {
    let url = `${localhostUrl}/${PRODUCTS_URL}?`;

    if (queryParams) {
        Object.keys(queryParams).forEach(key => {
            url = url.concat(`${key}=${queryParams[key]}`);
        });
    }

    return axios.get<IProduct[]>(url);
}

export const getProductsFemale = (): Promise<AxiosResponse<IProduct[]>> => {
    return requestProducts({'category':'female'})
}

export const getProductsMale = (): Promise<AxiosResponse<IProduct[]>> => {
    return requestProducts({ 'category': 'male' })
}

export const getProductsAccessories = (): Promise<AxiosResponse<IProduct[]>> => {
    return requestProducts({ 'category': 'accessories' });
}

export const getProductById = (productId: string): Promise<AxiosResponse<IProduct>> => {
    return axios.get<IProduct>(`${PRODUCTS_URL}/${productId}`);
}