import { AxiosError } from "axios";
import axios from "./axios";

export const userSendOTP = async (uniqueId: string) => {
    try {
        return await axios.post(`/user/send-otp/phone-number/${uniqueId}`);
    } catch (error) {
        console.log('error api: ', error);
    }
}

export const userVerifOTP = async (uniqueId: string, otp:string) => {
    try {
        return await axios.patch(`/user/verification/phone-number/${uniqueId}`, {otp})
        console.log('userVerifOTP')
    } catch (e) {
        const error = e as AxiosError<{ detail: string }>;
        throw error
    }
}