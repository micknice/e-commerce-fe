import axios, {AxiosInstance} from 'axios';
import FormData from 'form-data';
import {UserType} from '../auth/UserType' 


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

    // me = (user: UserType) => {
    //     return this.instance
    //     .get("./auth/me", {
    //         username:,

    //     })
    // }
}

const authService = new AuthService('http://localhost:8080')

export default authService