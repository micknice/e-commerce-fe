'use client'
import Image from 'next/image'
import RecaptchaImg from '../../public/assets/RecaptchaLogo.svg.png'
import {GiCheckMark} from 'react-icons/gi'
import {getCatShort} from '../../utils/utils'
import {BiChevronRight, BiChevronDown} from 'react-icons/bi'
import {getProductsByCategory} from '../api/ecommerceApi'
import { useEffect, useState } from 'react'
import BigProductCard from './BigProductCard'
import {extractTextBetweenSuffixAndLastSlash, getProductFromTitle} from '../../utils/utils'

interface ProductCategoryProps {
    category: string
}


const ProductCategory = ({category}: ProductCategoryProps) => {

    const [productArr, setProductArr] = useState([])

    useEffect(() => {
        const fetchProducts = async() => {
            const productArrActual = await getProductsByCategory(category)
            setProductArr(productArrActual.slice(0, 12))
            console.log(productArr, 'pArray!!!')
        }
        fetchProducts()

    }, [category])
    return (
        <div>
            <div className='flex flex-row items-center px-4 py-4'>
                <div>
                    <p className='text-xs text-mira-grey'>Home</p>
                </div>
                <div>
                    <BiChevronRight color='#c3c3c4'/>
                </div>
                <div>
                    <p className='text-xs text-mira-grey'>{getCatShort(category, false)}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-4">
                <div className="flex flex-col">
                    <div className="h-20 flex justify-center items-center">
                        {category &&
                            <p className="text-2xl text-mira-black font-bold tracking-tighter">{getCatShort(category)}</p>
                        }
    
                    </div>
                    
                    <div className='h-4'/>
                    <div className='w-full flex flex-row items-center'>
                        <p className="text-xs text-mira-black font-bold tracking-widest">{`CATEGORIES: ${getCatShort(category)}`}</p>
                        <div className='w-auto items-center justify-end'>
                            <BiChevronDown />
                        </div>
                    </div>
                   
                    <div className="h-3"/>
                    <div className="h-[1px] bg-gray-200"/>
                </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                        {productArr.map((product, index) => {
                            // console.log('product', product)
                            return(
                                <div className='h-[50vh] flex flex-col gap-y-4'>
                                    <BigProductCard product={product} key={`/p${index}`}/>
                                    <div className='h-[1px] bg-mira-grey'/>
                                </div>
                                

                            )
                        })

                        }
    
    
    
    
                    </div>
                
    
            </div>
        </div>
    )



}


export default ProductCategory