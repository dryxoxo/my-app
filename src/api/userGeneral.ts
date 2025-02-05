import { AxiosError } from "axios";
import axios from "./axios";

const getUser = async (username: string) => {
    try {
        const response = await axios.get(`/user/general/get-user/${username}`)
        console.log('data api user: ',)
        return response.data.data.unique_id
    } catch (e) {
        const error = e as AxiosError<{ detail: string }>;
        throw error
    }
}


export const login = async (username: string, password: string) => {
    try {
        const data = new URLSearchParams();
        const uniqueId = await getUser(username);

        data.append('username', uniqueId);
        data.append('password', password);
        return await axios.post('/user/general/login', data.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    } catch (e) {
        const error = e as AxiosError<{ detail: string }>;
        throw error
    }
}