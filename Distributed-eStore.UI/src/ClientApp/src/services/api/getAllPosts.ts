import { getAllPostsUrl } from "../../constants"
import { IProduct } from "../../state/products/"
import axios, { AxiosResponse } from "axios";

export const getAllPosts: () => Promise<AxiosResponse> = async () => {
    return axios.get<Array<IProduct>>(getAllPostsUrl);
}