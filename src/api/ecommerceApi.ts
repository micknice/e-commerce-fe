import axios, {AxiosInstance} from 'axios';
import FormData from 'form-data';
import { Economica } from 'next/font/google';
import { getCurrentUser } from './auth/useCurrentUser';




const eCommerceApi = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
                  
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

export const getReviewsByProductId = async(productId: number) => {
    const {data} = await eCommerceApi.get(`/review/${productId}`)
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
    return response
}

export const getBasket = async(token: string, userId: number) => {
    const {data} = await eCommerceApi.get(`/basket/${userId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    
    return data
}

export const addItemsToBasket = async(token: string, userId: number, productId: number) => {
    const {data} = await eCommerceApi.patch(`/basket/${userId}/itemAdd/${productId}`, null,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const removeItemFromBasket = async(token: string, userId: number, productId: number) => {
    const {data} = await eCommerceApi.patch(`/basket/${userId}/itemRemove/${productId}`, null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}








