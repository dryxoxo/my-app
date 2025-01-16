import axios from "./axios";

export const login = async (username: string, password: string) => {
    try {
        const data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);

        console.log('data send api', data.toString());

        return await axios.post('/user/general/login', data.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    } catch (error) {
        console.log('error api: ', error);
    }
}