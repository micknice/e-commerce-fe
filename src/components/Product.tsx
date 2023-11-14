'use client'
import {getCatShort, getSubCatShort, imgUrlToFilePath} from '../../utils/utils'
import {BiChevronRight, BiChevronDown, BiChevronLeft, BiChevronUp} from 'react-icons/bi'
import { getProductByProductId, getReviewsByProductId } from '../api/ecommerceApi'
import { useEffect, useState } from 'react'
import BigProductCard from './BigProductCard'
import Link from 'next/link'
import {ImArrowUp, ImArrowDown} from 'react-icons/im'
import {AiFillStar} from 'react-icons/ai'

interface ProductProps {
    product: string
}

// interface Review {

// }


const ProductCategory = ({product}: ProductProps) => {

    const [imgPath, setImgPath] = useState('')
    const [name, setName] = useState('')
    const [overview, setOverview] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [reviews, setReviews] = useState([])
    const [stock, setStock] = useState(0)

    useEffect(() => {
        const fetchProduct = async() => {
            const id = parseInt(product.split('-')[0])
            console.log(id, 'id')
            const productActual = await getProductByProductId(id)
            console.log(productActual, 'productActual')
            const imgStr = `${productActual.id -1}-${imgUrlToFilePath(productActual.img)}`
            setImgPath(`/mirafit-images/${imgStr}`)
            setName(productActual.name)
            setOverview(productActual.shortDescription)
            setPrice(productActual.price)
            setStock(productActual.inventory.quantity)
            const descriptionTrimmed = productActual.longDescription.slice(9, productActual.longDescription.length -1)
            setDescription(descriptionTrimmed) 
        }
        const fetchReviews = async() => {
            const id = parseInt(product.split('-')[0])
            const reviewsArr = await getReviewsByProductId(id)
            setReviews(reviewsArr)
        }
        fetchProduct()
        fetchReviews()
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
            <div className='px-4 flex flex-col justify-center gap-y-4'>
                <p className='text-mira-headtext text-2xl font-bold  tracking-tighter text-start'>{name.toUpperCase()}</p>
                <div className='h-10'>
                    <div className='flex flex-row items-center justify-start w-screen gap-x-4'>
                        <div className='h-11 w-auto flex items-center justify-start gap-x-[2px]'>
                            <div className='h-4 w-4 text-mira-black flex items-center justify-center relative'>
                                <AiFillStar className='star-icon' size='20px' />
                            </div>
                            <div className='h-4 w-4 text-mira-black flex items-center justify-center relative'>
                                <AiFillStar className='star-icon' size='20px' />
                            </div>
                            <div className='h-4 w-4 text-mira-black flex items-center justify-center relative'>
                                <AiFillStar className='star-icon' size='20px' />
                            </div>
                            <div className='h-4 w-4 text-mira-black flex items-center justify-center relative'>
                                <AiFillStar className='star-icon' size='20px' />
                            </div>
                            <div className='h-4 w-4 text-mira-black flex items-center justify-center relative'>
                                <AiFillStar className='star-icon' size='20px' />
                            </div>
                        </div>
                        <p className='tracking-wide text-sm'>{`${reviews.length} Reviews`}</p>
                        <p className='tracking-wide text-sm'>{`Add Your Review`}</p>
                
                    </div> 

                </div>
                <div>
                    {overview &&
                        <p className='text-sm tracking-wide '>{overview}</p>
                    }
                </div>
                <div className='h-[1px] w-full bg-gray-100'/>
                <div className='flex flex-row items-center justify-start gap-x-8'>
                    {price &&
                        <p className='text-2xl tracking-wide text-mira-orange'>{`£${price}`}</p>
                    }
                    {stock > 0 &&
                        <p className='text-sm tracking-wide '>IN STOCK</p>
                    }
                    {stock === 0 &&
                        <p className='text-sm tracking-wide '>OUT OF STOCK</p>
                    }
                </div>
                <div className='h-[1px] w-full bg-gray-100'/>
                <div className='grid grid-cols-5 items-center'>
                    <div className='col-span-2 flex items-center gap-x-2'>
                        <p className='tracking-wider text-sm font-medium'>QTY</p>
                        <div className='border-[1px] border-gray-200 h-10 w-12 flex items-center justify-center'>
                            <p className='text-mira-black text-sm'>1</p>
                        </div>
                        <div className='h-10 flex flex-col items-center justify-center font-light'>
                            <BiChevronUp/>
                            <BiChevronDown/>
                        </div>
                    </div>
                    <div className='h-12 w-52 bg-mira-orange flex items-center justify-center'>
                        <p className='text-white text-sm font-bold '> ADD TO CART</p>
                    </div>

                </div>
                <div className='h-[1px] w-full bg-gray-100'/>
                <p className='text-lg font-bold tracking-wide'>DESCRIPTION</p>
                <div className='h-[1px] w-full bg-gray-100'/>
                <div className='text-sm'>
                    {description &&
                        <p>{description}</p>
                        
                    }
                </div>
            </div>
        </div>
    )
}


export default ProductCategory