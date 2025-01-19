import axios from "./axios";

const getUser = async (username: string) => {
    try {
        const response = await axios.get(`/user/general/get-user/${username}`)
        console.log('data api user: ', )
        return response.data.data.unique_id
    } catch (error) {
        console.log(error)
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
    } catch (error) {
        console.log('error api: ', error);
    }
}