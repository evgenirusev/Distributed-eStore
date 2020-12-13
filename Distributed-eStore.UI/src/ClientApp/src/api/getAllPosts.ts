import { getAllPostsUrl } from "../constants"
import axios from "axios";

export const getAllPosts = async () => {
    try {
        return await axios.get(getAllPostsUrl);
    } catch (error) {
        console.error(error);
    }
}