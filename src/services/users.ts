import axios from 'axios'
import { RequestPostLogin, ResponsePostLogin } from './users.d'
const backend = axios.create({
    baseURL: 'http://192.168.137.1'
});

const login = async (data: RequestPostLogin): Promise<ResponsePostLogin> => {
    try {
        const req = await backend.post<ResponsePostLogin>('users/login',
            data,
            {}
        )

        return req.data;
    } catch (e: any) {
        return e.response.data;
    }
}

export { login, backend }