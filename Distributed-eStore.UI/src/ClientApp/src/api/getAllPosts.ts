import { getAllPostsUrl, Product } from "../constants"
import axios from "axios";

export const getAllPosts: () => Promise<Readonly<Product[]>> = async () => {
    return (await (axios.get<Array<Product>>(getAllPostsUrl))).data;
}