import { Res } from "@/types/res";
import { API_CONFIG } from "@/config/api";

export type Payload<T> = {
    params?: T;
    init?: RequestInit;
}

export async function post<T, R>(url: string, payload: T, init?: RequestInit): Promise<R> {
    try {
        const response = await fetch(`${API_CONFIG.baseURL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            ...init,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Res<R> = await response.json();


        if (data.message !== "success") {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}


export async function get<R, T = Record<string, string>>(url: string, payload?: Payload<T>): Promise<R> {
    try {

        if (payload?.params) {
            const queryParams = new URLSearchParams(payload?.params as Record<string, string>);
            url = `${url}?${queryParams.toString()}`;
        }

        const response = await fetch(`${API_CONFIG.baseURL}${url}`, {
            method: 'GET',
            ...payload?.init,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Res<R> = await response.json();


        if (data.message !== "success") {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return data.data;
    } catch (error) {
        console.error('Error getting data:', error);
        throw error;
    }
}

