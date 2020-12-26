import axios, { AxiosResponse } from "axios";
import { loginUrl, registerUrl } from "../../constants";

export const login = (email, password) => {
    return axios.post(loginUrl, { email, password })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        })
}

export const logout = (): void => {
    localStorage.removeItem("user");
}

export const register = (firstName: string, lastName: string, email: string, password: string): Promise<AxiosResponse> => {
    const x = axios.post(registerUrl, {
        firstName,
        lastName,
        email,
        password
    });
}

//export const getAllPosts: () => Promise<IProduct[]> = async () => {
//    return (await (axios.get<Array<IProduct>>(getAllPostsUrl))).data;
//}

//export const register: () => Promise<IProduct[]> = async () => {
//    return (await (axios.get<Array<IProduct>>(getAllPostsUrl))).data;
}