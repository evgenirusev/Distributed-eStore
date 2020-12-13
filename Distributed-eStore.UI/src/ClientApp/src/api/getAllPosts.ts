import { getAllPostsUrl, Product } from "../constants"
import axios from "axios";

export const getAllPosts: () => Promise<Readonly<Product[] | undefined>> = async () => {
    try {
        return (await axios.get<Array<Product>>(getAllPostsUrl)).data;
    } catch (error) {
        console.error(error);
    }
}