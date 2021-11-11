import axios, { ResponseType } from 'axios'
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
    } catch (e) {
        if (e instanceof Error)
            return { error: e.message };
        else
            return (e as any).response.data;
    }
}

export { login, backend }