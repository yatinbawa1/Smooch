import type { LoginCredentials } from "../modals/User";

const BACKEND_ADDRESS = import.meta.env.VITE_BACKEND_ADDRESS

export const login = async (creds: LoginCredentials) => {
    const response = await fetch(BACKEND_ADDRESS + "/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(creds)
    })

    if(!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Login Failed")
    }

    return response.json()
}

export const getCurrentUser = async () => {
     const response = await fetch(BACKEND_ADDRESS + "/auth/refresh", {
        method: "POST",
        credentials: "include"
    });

    if (!response.ok) {
        if (response.status === 401) {
            return null;
        }

        throw new Error("Failed to retrieve current user");
    }

    return response.json();
}