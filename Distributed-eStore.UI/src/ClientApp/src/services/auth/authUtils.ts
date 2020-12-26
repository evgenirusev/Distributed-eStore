import axios from "axios";
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

export const register: any = (firstName: string, lastName: string, email: string, password: string) {
    return axios.post(registerUrl, {
        firstName,
        lastName,
        email,
        password
    });
}