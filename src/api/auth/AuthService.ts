import axios, {AxiosInstance} from 'axios';
import FormData from 'form-data';


const eCommerceApi = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_NCNEWS_API_URL,
    baseURL: 'http://localhost:8080',
    headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Credentials': 'true',
                  'Content-Type': 'application/json; charset=UTF-8'
                }
});



export class AuthService {
    protected readonly instance: AxiosInstance;
    public constructor(url: string) {
        this.instance = axios.create({
            baseURL: url,
            timeout: 30000,
            timeoutErrorMessage: 'Timed out!'
        });
    }

    login = (username: string, password: string) => {
        return this.instance
        .post("/login", {
            username,
            password,
        })
        .then((res) =>  {
            return {
                username: res.data.username,
                accessToken: res.data.access_token,
                expiredAt: res.data.expiredAt
            }
        })
    }
}

const authService = new AuthService('http://localhost:8080')

export default authService