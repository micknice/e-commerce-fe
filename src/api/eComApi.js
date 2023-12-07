import axios from 'axios';
import FormData from 'form-data';

const eCommerceApi = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_NCNEWS_API_URL,
    baseURL: 'http://localhost:8080'
});

const getAllProducts = async () => {
    const {data} = await eCommerceApi.get('/product');
    console.log(data)
    return data
}

const getProductsByCategory = async (category) => {
    const {data} = await eCommerceApi.get(`/product/category/${category}`)
    console.log(date)
}



