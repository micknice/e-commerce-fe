'use client'
import {getCatShort, getSubCatShort, imgUrlToFilePath, formatDescription, convertDateFormat} from '../../utils/utils'
import {BiChevronRight, BiChevronDown, BiChevronLeft, BiChevronUp} from 'react-icons/bi'
import { getProductByProductId, getReviewsByProductId } from '../api/ecommerceApi'
import { useEffect, useState } from 'react'
import BigProductCard from './BigProductCard'
import Link from 'next/link'
import {AiFillStar} from 'react-icons/ai'
import {addItemsToBasket} from '../api/ecommerceApi'
import { useCurrentUser } from "@/api/auth/useCurrentUser"
import { useCartContext } from "@/context/cartContext"
import { useMediaQuery } from '@mui/material'
import ReviewsStarsBarsWidget from './ReviewsStarsBarsWidget'


interface ProductProps {
    product: string
}

const ProductCategory = ({product}: ProductProps) => {
    const isMobile = useMediaQuery('(max-width: 1028px)');
    const currentUser = useCurrentUser()
    const {cartContext, updateCartContext} = useCartContext()

    const [imgPath, setImgPath] = useState('')
    const [name, setName] = useState('')
    const [overview, setOverview] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState<any[]>([])
    const [reviews, setReviews] = useState<any[]>([])
    const [stock, setStock] = useState(0)
    const [aveRating, setAveRating] = useState(0)
    const [star1, setStar1] = useState(0)
    const [star2, setStar2] = useState(0)
    const [star3, setStar3] = useState(0)
    const [star4, setStar4] = useState(0)
    const [star5, setStar5] = useState(0)
    const [id, setId] = useState(1)
    

    useEffect(() => {
        const fetchProduct = async() => {
            const id = parseInt(product.split('-')[0])
            setId(id)
            const productActual = await getProductByProductId(id)
            const imgStr = `${productActual.id -1}-${imgUrlToFilePath(productActual.img)}`
            setImgPath(`/mirafit-images/${imgStr}`)
            setName(productActual.name)
            setOverview(productActual.shortDescription)
            setPrice(productActual.price)
            setStock(productActual.inventory.quantity)
            const descriptionTrimmed = productActual.longDescription.slice(9, productActual.longDescription.length -1)
            const formattedArray = formatDescription(descriptionTrimmed)
            setDescription(formattedArray) 

        }
        const fetchReviews = async() => {
            const id = parseInt(product.split('-')[0])
            const reviewsArr = await getReviewsByProductId(id)
            console.log(reviewsArr, '!!!!!!!!!!')
            setReviews(reviewsArr)
            const ratings = reviewsArr.map((x:any) => x = Math.round(x.rating * 5) / 5)
            const ave = ratings.reduce((acc:number, curr:number) =>  { return acc + curr}, 0) / 5
            setAveRating(ave)
            setStar1(reviewsArr.filter((x: { rating: number }) => x.rating === 0.2).length)
            setStar2(reviewsArr.filter((x: { rating: number }) => x.rating === 0.4).length)
            setStar3(reviewsArr.filter((x: { rating: number }) => x.rating === 0.6).length)
            setStar4(reviewsArr.filter((x: { rating: number }) => x.rating === 0.8).length)
            setStar5(reviewsArr.filter((x: { rating: number }) => x.rating === 1.0).length)
        }
        fetchProduct()
        fetchReviews()
    }, [product])

    const handleAddToCart = async() => {
        if (currentUser) {
          const basket = await addItemsToBasket(currentUser.jwt, currentUser.user.id, id)
          updateCartContext()
    
        }
      }
    const handleSubmit = async() => {
        
    }
    
    return (
        <div className='flex flex-col md:mx-24 '>
            {/* nav tab */}
            <div className='flex flex-col'>
                <div className='flex flex-row items-center px-4 py-4 '>
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
                    <img className=' h-full w-full object-cover md:h-1/4 md:w-1/4' src={imgPath} alt={`${name}`}/>
                }    
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <div className='px-4 flex flex-col justify-center gap-y-3'>
                    <p className='text-mira-headtext text-2xl font-bold  tracking-tighter text-start'>{name.toUpperCase()}</p>
                    <div className='h-10'>
                        <div className='flex flex-row items-center justify-start max-w-screen gap-x-4'>
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
                            <p className='text-sm tracking-wide text-gray-400'>IN STOCK</p>
                        }
                        {stock === 0 &&
                            <p className='text-sm tracking-wide text-gray-400'>OUT OF STOCK</p>
                        }
                    </div>
                    <div className='h-[1px] w-full bg-gray-100'/>
                    <div className='grid grid-cols-5 items-center'>
                        <div className='col-span-2 md:col-span-1 flex items-center gap-x-2'>
                            <p className='tracking-wider text-sm font-medium'>QTY</p>
                            <div className='border-[1px] border-gray-200 h-10 w-12 flex items-center justify-center'>
                                <p className='text-mira-black text-sm'>1</p>
                            </div>
                            <div className='h-10 flex flex-col items-center justify-center font-light'>
                                <BiChevronUp/>
                                <BiChevronDown/>
                            </div>
                        </div>
                        <div className='h-12 w-52 bg-mira-orange flex items-center justify-center' onClick={handleAddToCart}>
                            <p className='text-white text-sm font-bold '> ADD TO CART</p>
                        </div>
                    </div>
            </div>
                <div className='h-[1px] w-full bg-gray-100'/>
                <p className='text-lg font-bold tracking-wide'>DESCRIPTION</p>
                <div className='h-[1px] w-full bg-gray-100'/>
                <div className='text-sm flex flex-col  px-8 gap-y-2'>
                    {description.length > 0 &&
                        description.map((line, lineIndex) => {
                            if (Array.isArray(line)) {
                            return line.map((subLine, index) => (
                                <div className='flex flex-row items-start justify-start gap-x-2' key={`chev${index}`}>
                                    <div className='w-4 font-semibold text-lg text-mira-black flex flex-row items-start justify-start pt-[1px]'><BiChevronRight /></div>
                                    <p className='text-sm tracking-wide text-mira-black'>{subLine}</p>
                                </div>
                            ));
                            } else {
                            return (
                                <div className='flex flex-row items-start justify-start gap-x-2' key={`chev${lineIndex}`}>
                                    <div className='w-4 font-semibold text-lg text-mira-black flex flex-row items-start justify-start pt-[1px]'><BiChevronRight /></div>
                                    <p className='text-sm tracking-wide text-mira-black'>{line}</p>
                                </div>
                            );
                            }}
                        )
                    }
                </div>
                <ReviewsStarsBarsWidget aveRating={aveRating} star1={star1} star2={star2} star3={star3} star4={star4} star5={star5} reviews={reviews} name={name} id={id}/>
            </div>
        </div>
    )
}


export default ProductCategory