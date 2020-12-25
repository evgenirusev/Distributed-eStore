export const login: any = (username, password) => {
    return axios
        .post(API_URL + "signin", { username, password })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
}

export const logout: any = () => {
    localStorage.removeItem("user");
}

export const register: any = (username, email, password) {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
}