import axios, { AxiosResponse } from "axios";
import { loginUrl, registerUrl } from "../../constants";

export const register = (firstName: string, lastName: string, email: string, password: string): Promise<AxiosResponse> => {
    return axios.post(registerUrl, {
        firstName,
        lastName,
        email,
        password
    });
}

export const login = (email: string, password: string): Promise<AxiosResponse> => {
    return axios.post(loginUrl, { email, password });
}

export const logout = (): void => {
    localStorage.removeItem("user");
}