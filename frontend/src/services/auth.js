import apiClient from "./apiClient";


export const authService = {
    async login(username, password) {
        const res = await apiClient.post("/api/auth/login/", {
            username,
            password,
        });

        // Store tokens
        localStorage.setItem('accessToken', res.data.access);
        localStorage.setItem('refreshToken', res.data.refresh);

        return res.data;
    },

    async logout() {
        const refreshToken = localStorage.getItem('refreshToken');
        await apiClient.post("/api/auth/logout/", {
            refresh: refreshToken
        });

        // Clear tokens
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        window.location.href = "/";
    },

    async check() {
        const res = await apiClient.get("/api/auth/check/");
        return res.data;
    },
};   