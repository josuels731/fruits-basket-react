import axios from 'axios'
import { RequestPostDayMostWatched, ResponsePostDayMostWatched } from './movies.d'
const backend = axios.create({
    baseURL: 'http://localhost/users'
});

const dayMostWatched = async (): Promise<ResponsePostDayMostWatched> => {
    try {
        const req = await backend.get<ResponsePostDayMostWatched>('/dayMostWatched',
            {}
        )

        return req.data;
    } catch (e: any) {
        return e.response.data;
    }
}

export { dayMostWatched }