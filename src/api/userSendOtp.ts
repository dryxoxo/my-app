import axios from "./axios";

export const userSendOTP = async (uniqueId:string) => {
    try {
        return await axios.post(`/user/send-otp/phone-number/${uniqueId}`);
    } catch (error) {
        console.log('error api: ', error);
    }
}