import axios from "./axios";

export const registerNewAccount = async (uniqueId:string) => {
    try {
        return await axios.post(`/user/register/new-account/${uniqueId}`);
    } catch (error) {
        console.log('error api: ', error);
    }
}