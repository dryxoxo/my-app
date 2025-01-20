import axiosInstance from "./axios";
import { AxiosError, AxiosResponse } from 'axios';

export const registerNewAccount = async (fullname: string, phoneNumber: string) => {
    try {
        const data = {
            full_name: fullname,
            phone_number: phoneNumber
        };
        
        console.log('data send api', JSON.stringify(data, null, 2));

        return await axiosInstance.post('/user/register/new-account', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (e) {
        const error = e as AxiosError<{ detail: string }>;
        throw error
    }
}
