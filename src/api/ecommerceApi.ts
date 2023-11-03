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

export const  getAllProducts = async () => {
    const {data} = await eCommerceApi.get('/product');
    console.log(data)
    return data
}

export const getProductsByCategory = async(category: string) => {
    const {data} = await eCommerceApi.get(`/product/category/${category}`)
    console.log(data)
    return data
}

export const getProductsBySubCategory = async(subCategory: string) => {
    const {data} = await eCommerceApi.get(`/product/subCategory/${subCategory}`)
    console.log(data)
    return data
}

export const getProductByProductId = async(productId: number) => {
    const { data } = await eCommerceApi.get(`/product/id/${productId}`)
    return data
}

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






