'use client'
import {getCatShort, getSubCatShort, imgUrlToFilePath, formatDescription, convertDateFormat} from '../../utils/utils'
import {BiChevronRight, BiChevronDown, BiChevronLeft, BiChevronUp} from 'react-icons/bi'
import { getProductByProductId, getReviewsByProductId } from '../api/ecommerceApi'
import { useEffect, useState } from 'react'
import BigProductCard from './BigProductCard'
import Link from 'next/link'
import {ImArrowUp, ImArrowDown} from 'react-icons/im'
import {AiFillStar} from 'react-icons/ai'
import {Progress, Avatar} from 'flowbite-react' 

interface ProductProps {
    product: string
}


const ProductCategory = ({product}: ProductProps) => {
    const starArrayForMap = [0.1, 0.3, 0.5, 0.7, 0.9]

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
            const formattedArray = formatDescription(descriptionTrimmed)
            setDescription(formattedArray) 

        }
        const fetchReviews = async() => {
            const id = parseInt(product.split('-')[0])
            const reviewsArr = await getReviewsByProductId(id)
            setReviews(reviewsArr)
            const ratings = reviewsArr.map((x:any) => x = Math.round(x.rating * 5) / 5)
            const ave = ratings.reduce((acc:number, curr:number) =>  { return acc + curr}, 0) / 5
            setAveRating(ave)
            setStar1(reviewsArr.filter((x: { rating: number }) => x.rating === 0.2).length)
            setStar2(reviewsArr.filter((x: { rating: number }) => x.rating === 0.4).length)
            setStar3(reviewsArr.filter((x: { rating: number }) => x.rating === 0.6).length)
            setStar4(reviewsArr.filter((x: { rating: number }) => x.rating === 0.8).length)
            setStar5(reviewsArr.filter((x: { rating: number }) => x.rating === 1.0).length)
            // console.log(ave)
            
        }
        fetchProduct()
        fetchReviews()
    }, [product])
    
    return (
        <div className='flex flex-col '>
            {/* nav tab */}
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
                <img className=' h-full w-full object-cover' src={imgPath} />
            }    
            </div>
            <div className='px-4 flex flex-col justify-center gap-y-3'>
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
                        <p className='text-sm tracking-wide text-gray-400'>IN STOCK</p>
                    }
                    {stock === 0 &&
                        <p className='text-sm tracking-wide text-gray-400'>OUT OF STOCK</p>
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
                <div className='text-sm flex flex-col px-8 gap-y-2'>
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
                            }
                        })
                    }
                </div>
                <div className='flex flex-col items-start justify-center w-full gap-y-8'>
                    <p className='text-2xl font-semibold tracking-wide'>Customer Reviews</p>
                    <div className='grid grid-cols-5 items-center justify-center  w-full '>
                        
                        <div className='col-span-2 items-center justify-start'>
                            <p className='text-6xl  h-full'>{(aveRating * 5).toFixed(1)}</p>
                        </div>
                        <div className='col-span-3 grid grid-rows-3  items-center h-full'>
                            <div className='row-span-2'>
                                <div className='h-full w-auto flex items-center justify-start gap-x-[2px]'>
                                    {starArrayForMap.map((star, index) => {
                                        if (aveRating > star) {
                                            return (
                                                <div className='h-full w-auto text-star-gold flex items-center justify-center relative' key={`st${index}`}>
                                                    <AiFillStar className='star-icon' size='30px' />
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className='h-full w-auto   flex items-center justify-center relative'>
                                                    <AiFillStar  size='30px' color='#ed9d00' opacity={`${20}%`} key={`st${index}`}/>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <div className='row-span-1'>
                                <p className='tracking-wide text-mira-subhead-text-grey text-md'>{`${reviews.length} reviews`}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-20  bg-gray-100 grid grid-cols-5 items-center justify-start  px-2 gap-x-3'>
                        <div className='h-12 col-span-2 bg-mira-orange flex justify-center items-center'>
                            <p className='text-white text-sm font-semibold'>WRITE A REVIEW</p>
                        </div>
                        <div className='col-span-3 flex items-center'>
                            <p className='text-sm text-mira-subhead-text-grey tracking-wide'> Share your thoughts with other customers</p>
                        </div>
                    </div>
                    {/* ratings widget */}
                    <div className='h-32 w-full flex flex-col gap-y-1'>
                        <div className='grid grid-cols-8 items-center gap-x-5'>
                            <div className='col-span-2 flex flex-row justify-end items-center '>
                                <p className=' text-sm text-mira-subhead-text-grey'>5 stars</p>
                            </div>
                            <div className='col-span-4'>
                                <div className="w-full bg-gray-200  h-1.5 dark:bg-gray-700">
                                    <div className="bg-mira-orange h-1.5 " style={{width: `${Math.round(( 100 / reviews.length ) * star5)}%`}}></div>
                                </div>
                            </div>
                            <div className='col-span-2 flex flex-row justify-start items-center '>
                                <p className=' text-sm text-mira-subhead-text-grey'>{`${Math.round(( 100 / reviews.length ) * star5)}% (${star5})`}</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-8 items-center gap-x-5'>
                            <div className='col-span-2 flex flex-row justify-end items-center '>
                                <p className=' text-sm text-mira-subhead-text-grey'>4 stars</p>
                            </div>
                            <div className='col-span-4'>
                                <div className="w-full bg-gray-200  h-1.5 dark:bg-gray-700">
                                    <div className="bg-mira-orange h-1.5 " style={{width: `${Math.round(( 100 / reviews.length ) * star4)}%`}}></div>
                                </div>
                            </div>
                            <div className='col-span-2 flex flex-row justify-start items-center '>
                                <p className=' text-sm text-mira-subhead-text-grey'>{`${Math.round(( 100 / reviews.length ) * star4)}% (${star4})`}</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-8 items-center gap-x-5'>
                            <div className='col-span-2 flex flex-row justify-end items-center '>
                                <p className=' text-sm text-mira-subhead-text-grey'>3 stars</p>
                            </div>
                            <div className='col-span-4'>
                                <div className="w-full bg-gray-200  h-1.5 dark:bg-gray-700">
                                    <div className="bg-mira-orange h-1.5 " style={{width: `${Math.round(( 100 / reviews.length ) * star3)}%`}}></div>
                                </div>
                            </div>
                            <div className='col-span-2 flex flex-row justify-start items-center '>
                                <p className=' text-sm text-mira-subhead-text-grey'>{`${Math.round(( 100 / reviews.length ) * star3)}% (${star3})`}</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-8 items-center gap-x-5'>
                            <div className='col-span-2 flex flex-row justify-end items-center '>
                                <p className=' text-sm text-mira-subhead-text-grey'>2 stars</p>
                            </div>
                            <div className='col-span-4'>
                                <div className="w-full bg-gray-200  h-1.5 dark:bg-gray-700">
                                    <div className="bg-mira-orange h-1.5 " style={{width: `${Math.round(( 100 / reviews.length ) * star2)}%`}}></div>
                                </div>
                            </div>
                            <div className='col-span-2 flex flex-row justify-start items-center '>
                                <p className=' text-sm text-mira-subhead-text-grey'>{`${Math.round(( 100 / reviews.length ) * star2)}% (${star2})`}</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-8 items-center gap-x-5'>
                            <div className='col-span-2 flex flex-row justify-end items-center '>
                                <p className=' text-sm text-mira-subhead-text-grey'>1 star</p>
                            </div>
                            <div className='col-span-4'>
                                <div className="w-full bg-gray-200  h-1.5 dark:bg-gray-700">
                                    <div className="bg-mira-orange h-1.5 " style={{width: `${Math.round(( 100 / reviews.length ) * star1)}%`}}></div>
                                </div>
                            </div>
                            <div className='col-span-2 flex flex-row justify-start items-center '>
                                <p className=' text-sm text-mira-subhead-text-grey'>{`${Math.round(( 100 / reviews.length ) * star1)}% (${star1})`}</p>
                            </div>
                        </div>
                                    
                    </div>
                    <p className='text-2xl font-bold tracking-wide'>Top customer reviews</p>
                    <div className='w-full'>
                        <div className='flex flex-row justify-center items-center bg-gray-100 h-20 w-full gap-x-1'>
                            <p className='text-xs tracking-wide'>Sort By:</p>
                            <div className='h-7 w-2/5 border-[1px] border-mira-subhead-text-grey bg-white'>
    
                            </div>
                            <div className='h-7 w-7 bg-gray-200 flex items-center justify-center'>
    
                            </div>
                        </div>
                    <div className='text-xs flex flex-row items-center justify-start gap-x-2 px-8 pt-3'>
                        <input type='checkbox'></input>
                        <p className='text-xs text-mira-black tracking-wide'>Verified Buyers</p>
                    </div>
                    </div>
                    
                    {reviews.map((review) => {
                        return (
                            <div className='flex flex-col justify-start items-start w-full gap-y-1'>
                                <div className='h-[1px] w-full bg-mira-grey'/>
                                <div className='flex flex-col gap-y-4 w-full'>
                                    <div className='w-full grid grid-cols-3 justify-start items-center'>
                                        <div className='col-span-2 flex items-start justify-start'>
                                            <p className='text-lg tracking-wide'>{review.author}</p>
                                        </div>
                                        <div className='w-full col-span-1 flex items-center justify-end'>
                                            <p className='text-xs tracking-wide text-gray-400'>{convertDateFormat(review.date)}</p>
                                        </div>
                                    </div>
                                    <div className='w-full flex items-start justify-start'>
                                        <p className='text-xl font-semibold tracking-wide'>{review.title}</p>
                                    </div>
                                    <div className='grid grid-rows-3 w-full justify-start items-center h-10 '>
                                        <div className='w-full row-span-1'>
                                            <p className='text-xs tracking-wider text-mira-subhead-text-grey'>Review</p>
                                        </div>
                                        <div className='w-full row-span-2 flex flex-row items-center'>
                                            {starArrayForMap.map((star, index) => {
                                                if (review.rating > star) {
                                                    return (
                                                        <div className='h-full w-auto text-star-gold flex items-center justify-center relative' key={`st${index}`}>
                                                            <AiFillStar className='star-icon' size='20px' />
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div className='h-full w-auto   flex items-center justify-center relative'>
                                                            <AiFillStar  size='20px' color='#ed9d00' opacity={`${20}%`} key={`st${index}`}/>
                                                        </div>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </div>
                                    <p className='text-sm tracking-wide text-mira-subhead-text-black'>{review.body}</p>
                                </div>
                            </div>
                        )})
                    }
                    <div className='flex flex-col justify-start items-start w-full gap-y-8'></div>
                    <div className='w-full bg-gray-200 flex flex-col p-4 gap-y-8'>
                        <div className='flex flex-col'>
                            <p className='text-sm font-lighttracking-wide'>YOU'RE REVIEWING:</p>
                            <p className='text-xl font-semibold tracking-tight'>{name}</p>
                        </div>
                        <div className='flex flex-row items-center justify-start gap-x-8 '>
                            <p className='font-semibold'>Review</p>
                            <div className='h-auto w-auto flex items-center justify-start gap-x-[6px] '>
                                <div className='h-auto w-5 text-mira-grey flex items-center justify-center relative'>
                                    <AiFillStar className='star-icon' size='18px' />
                                </div>
                                <div className='h-auto w-5 text-mira-grey flex items-center justify-center relative'>
                                    <AiFillStar className='star-icon' size='18px' />
                                </div>
                                <div className='h-auto w-5 text-mira-grey flex items-center justify-center relative'>
                                    <AiFillStar className='star-icon' size='18px' />
                                </div>
                                <div className='h-auto w-5 text-mira-grey flex items-center justify-center relative'>
                                    <AiFillStar className='star-icon' size='18px' />
                                </div>
                                <div className='h-auto w-5 text-mira-grey flex items-center justify-center relative'>
                                    <AiFillStar className='star-icon' size='18px' />
                                </div>
                            </div>
                            <div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductCategory