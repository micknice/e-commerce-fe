import axios, {AxiosInstance} from 'axios';
import { activeUrl } from '../../url'

const eCommerceApi = axios.create({
    baseURL: `${activeUrl}`,
    headers: {
                  
                }
});

export const  getAllProducts = async () => {
    const {data} = await eCommerceApi.get('/product');
    return data
}

export const getProductsByCategory = async(category: string) => {
    const {data} = await eCommerceApi.get(`/product/category/${category}`)
    return data
}
export const getProductsBySubCategory = async(category: string) => {
    const {data} = await eCommerceApi.get(`/product/category/${category}`)
    return data
}
export const getProductsByCategoryPaginated = async(category: string, pageIndex: number = 0, itemsPer: number = 12, sortBy:string, orderBy: string) => {
    const {data} = await eCommerceApi.get(`/product/category/${category}?page=${pageIndex}&items=${itemsPer}&sortBy=${sortBy}&orderBy=${orderBy}`)
    return data
}

export const getProductsBySubCategoryPaginated = async(subCategory: string, pageIndex: number = 0, itemsPer: number = 12, sortBy:string = 'id', orderBy: string = 'asc') => {
    const {data} = await eCommerceApi.get(`/product/category/*/subCategory/${subCategory}?page=${pageIndex}&items=${itemsPer}&sortBy=${sortBy}&orderBy=${orderBy}`)
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

export const postReview = async (token: string, productId: number, userId: number, title: string, body: string, rating: number, nickname: string) => {
    const reviewObj = {
        author: nickname,
        title: title,
        rating: rating,
        body: body
    }
    const {data} = await eCommerceApi.post(`/review/${productId}/user/${userId}`, reviewObj, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

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

    const response = await eCommerceApi.post(`/auth/register`, reqObj, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
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
    console.log(data, "getBasket")
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

export const clearBasket = async(token: string, userId: number) => {
    const {data} = await eCommerceApi.patch(`/basket/${userId}/emptyBasket`, null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const forgotPassword = async(email: string) => {
    const reqObj = {email: email}
    const {data} = await eCommerceApi.post(`/auth/forgot`, reqObj)
    return data
}








