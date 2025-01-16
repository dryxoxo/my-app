import axios from "./axios";

export const registerNewAccount = async (fullname: string, phoneNumber: string) => {
    try {
        const data = {
            full_name: fullname,
            phone_number: phoneNumber
        };
        
        console.log('data send api', JSON.stringify(data, null, 2));

        return await axios.post('/user/register/new-account', JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.log('error api: ', error);
    }
}
