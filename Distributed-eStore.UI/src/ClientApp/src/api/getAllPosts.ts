import { getAllPostsUrl } from "../constants"
import { Product } from "../state/products/"
import axios from "axios";

export const getAllPosts: () => Promise<Readonly<Product[]>> = async () => {
    return (await (axios.get<Array<Product>>(getAllPostsUrl))).data;
}