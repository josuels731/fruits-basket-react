import axios from 'axios'
import { RequestPostLogin, ResponsePostLogin } from './users.d'
const backend = axios.create({
    baseURL: 'http://localhost:3000/users'
});

const login = async (data: RequestPostLogin): Promise<ResponsePostLogin> => {
    try {
        const req = await axios.post<ResponsePostLogin>('/login',
            data,
            {}
        )

        return req.data;
    } catch (e: any) {
        return e;
    }
}

export { login }