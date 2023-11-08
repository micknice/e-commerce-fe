import axios, {AxiosInstance} from 'axios';
import FormData from 'form-data';




const eCommerceApi = axios.create({
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
export const getProductsBySubCategory = async(category: string) => {
    const {data} = await eCommerceApi.get(`/product/category/${category}`)
    console.log(data)
    return data
}
export const getProductsByCategoryPaginated = async(category: string, pageIndex: number = 0, itemsPer: number = 12, sortBy:string, orderBy: string) => {
    const {data} = await eCommerceApi.get(`/product/category/${category}?page=${pageIndex}&items=${itemsPer}&sortBy=${sortBy}&orderBy=${orderBy}`)
    console.log('query', `/product/category/${category}?page=${pageIndex}&items=${itemsPer}&sortBy=${sortBy}&orderBy=${orderBy}`)
    return data
}

export const getProductsBySubCategoryPaginated = async(subCategory: string, pageIndex: number = 0, itemsPer: number = 12, sortBy:string = 'id', orderBy: string = 'asc') => {
    const {data} = await eCommerceApi.get(`/product/category/*/subCategory/${subCategory}?page=${pageIndex}&items=${itemsPer}&sortBy=${sortBy}&orderBy=${orderBy}`)
    console.log(data)
    return data
}

export const getProductByProductId = async(productId: number) => {
    const { data } = await eCommerceApi.get(`/product/id/${productId}`)
    return data
}

export const registerUser = async(firstName: string, lastName: string, email: string, password: string) => {
    const userObj = {
        username: email,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName

    }
    const reqObj = JSON.stringify(userObj)

    const response = await eCommerceApi.post(`/auth/register`, reqObj)
    return response
}

export const verifyUser = async(token: string) => {
    const response = await eCommerceApi.post(`/auth/verify?token=${token}`)
    return response
}

export const getUser = async(token: string) => {
    const response = await eCommerceApi.get(`/auth/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}








