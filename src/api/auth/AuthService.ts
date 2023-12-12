import axios, {AxiosInstance} from 'axios';
import { activeUrl } from '../../../url'


const eCommerceApi = axios.create({
    baseURL: `${activeUrl}`,
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
            timeoutErrorMessage: 'Timed out!',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json; charset=UTF-8'
              }
        });
    }

    login = (username: string, password: string) => {
        return this.instance
        .post("/auth/login", {
            username,
            password,
        })
        .then((res) =>  {
            return {
                username: username,
                user: res.data.user,
                jwt: res.data.jwt,
                success: res.data.success,
                failureReason: res.data.failureReason
            }
        })
    }

    
}

const authService = new AuthService(`${activeUrl}`)

export default authService