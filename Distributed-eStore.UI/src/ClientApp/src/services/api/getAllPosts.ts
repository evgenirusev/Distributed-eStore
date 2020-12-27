import { getAllPostsUrl } from "../../constants"
import { IProduct } from "../../state/products/"
import axios, { AxiosResponse } from "axios";

export const getAllPosts: () => Promise<AxiosResponse<IProduct[]>> = () => {
    return axios.get<IProduct[]>(getAllPostsUrl);
}