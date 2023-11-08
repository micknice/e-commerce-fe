'use client'
import {getCatShort, getSubCatShort, imgUrlToFilePath} from '../../utils/utils'
import {BiChevronRight, BiChevronDown, BiChevronLeft} from 'react-icons/bi'
import { getProductByProductId, } from '../api/ecommerceApi'
import { useEffect, useState } from 'react'
import BigProductCard from './BigProductCard'
import Link from 'next/link'
import {ImArrowUp, ImArrowDown} from 'react-icons/im'

interface ProductProps {
    product: string
}


const ProductCategory = ({product}: ProductProps) => {

    const [imgPath, setImgPath] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        const fetchProduct = async() => {
            const id = parseInt(product.split('-')[0])
            console.log(id, 'id')
            const productActual = await getProductByProductId(id)
            console.log(productActual, 'productActual')
            const imgStr = `${productActual.id -1}-${imgUrlToFilePath(productActual.img)}`
            setImgPath(`/mirafit-images/${imgStr}`)
            setName(productActual.name)
        }

        fetchProduct()
        

    }, [product])


    
    
    return (
        <div>
            {/* nav tab */}
            <div className='flex flex-row items-center px-4 py-4'>
                <Link href={'/'}>
                    <div className='group'>
                        <p className='text-xs text-mira-grey group-hover:text-mira-orange'>Home</p>
                    </div>
                </Link>
                <div>
                    <BiChevronRight color='#c3c3c4'/>
                </div>
                    <div className='group'>
                        <p className='text-xs text-mira-grey group-hover:text-mira-orange'>{name}</p>
                    </div>
                
            </div>
            <div>
            {imgPath &&
                <img className=' h-full w-full object-cover' src={imgPath} />
            }    
            </div>
            <div className='px-4 flex flex-col justify-center'>
                <p className='text-mira-headtext text-2xl font-bold  tracking-tighter text-start'>{name}</p>
                <div className='outline'>

                </div>
            </div>
        </div>
    )
}


export default ProductCategory