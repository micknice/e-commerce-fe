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
import NewReviewWidget from '../components/NewReviewWidget'
import NewReviewWidgetLarge from '../components/NewReviewWidgetLarge'
import  useMediaQuery  from '@mui/material/useMediaQuery'
import RatingsBarsWidget from './RatingsBarsWidget'
import RatingsStarsWidget from './RatingsStarsWidget'
import RatingsStarsWidgetLarge from './RatingsStarsWidgetLarge'
import RatingsBarsWidgetLarge from './RatingsBarsWidgetLarge'
import ReviewCard from './ReviewCard'
import ReviewCardLarge from './ReviewCardLarge'

interface ReviewsStarsBarsWidgetProps {
    aveRating: number
    reviews: any[]
    star5: number
    star4: number
    star3: number
    star2: number
    star1: number
    name: string
    id: number
}

const ReviewsStarsBarsWidget = ({aveRating, reviews, star5, star4, star3, star2, star1, name, id}: ReviewsStarsBarsWidgetProps) => {
    const isMobile = useMediaQuery('(max-width: 1028px)');
    if (isMobile) {

    
    return (
        <div className='flex flex-col items-start justify-center w-full gap-y-8'>
            <p className='text-2xl font-semibold tracking-wide px-4'>Customer Reviews</p>
                {isMobile &&
                    <RatingsStarsWidget aveRating={aveRating} reviews={reviews}/>
                }
                     {/* <RatingsStarsWidgetLarge aveRating={aveRating} reviews={reviews}/> */}
                <div className='w-full h-20  bg-gray-100 grid grid-cols-5 items-center justify-start  px-2 gap-x-3'>
                    <div className='h-12 col-span-2 bg-mira-orange flex justify-center items-center'>
                        <p className='text-white text-sm font-semibold'>WRITE A REVIEW</p>
                    </div>
                    <div className='col-span-3 flex items-center'>
                        <p className='text-sm text-mira-subhead-text-grey tracking-wide'> Share your thoughts with other customers</p>
                    </div>
                </div>
                {/* ratings widget */}
                {isMobile &&
                    <RatingsBarsWidget star5={star5} star4={star4} star3={star3} star2={star2} star1={star1} reviews={reviews}/>
                }
                     {/* <RatingsBarsWidgetLarge star5={star5} star4={star4} star3={star3} star2={star2} star1={star1} reviews={reviews}/> */}
                
                <p className='text-2xl font-bold tracking-wide px-4'>Top customer reviews</p>
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
                
                {reviews.map((review, index) => {
                    return (
                        <ReviewCard review={review} index={index} key={`rev${index}`}/>
                    )})
                }
                <div className='flex flex-col justify-start items-start w-full gap-y-8'></div>


                {isMobile &&
                    <NewReviewWidget productName={name} productId={id}/>
                }
                {!isMobile &&
                    <NewReviewWidgetLarge productName={name} productId={id}/>
                }


        </div>
    )
    } else {
        return (
            <div className='flex flex-col items-start justify-end w-full gap-y-8 '>
                <p className='text-2xl font-semibold tracking-wide '>Customer Reviews</p>
                <div className='w-full grid grid-cols-2'>
                    <div className='w-full col-span-1 flex flex-row  border-r-[2px] justify-start gap-x-4'>
                        <RatingsStarsWidgetLarge aveRating={aveRating} reviews={reviews}/>
                        <RatingsBarsWidgetLarge star5={star5} star4={star4} star3={star3} star2={star2} star1={star1} reviews={reviews}/>
                    </div>
                    <div className='w-full grid grid-cols-2 justify-end items-center'>
                        <div/>
                        <div className='w-full h-20 flex flex-row items-center justify-end px-2 gap-x-3'>
                            <div className='h-14 w-44 rounded-sm col-span-2 bg-mira-orange flex justify-center items-center'>
                                <p className='text-white text-sm font-semibold'>WRITE A REVIEW</p>
                            </div>
                            <div className='col-span-3 flex flex-col items-start'>
                                <p className='text-sm text-mira-subhead-text-grey tracking-wide'> Share your thoughts</p>
                                <p className='text-sm text-mira-subhead-text-grey tracking-wide'> with other customers</p>
                            </div>
                        </div>
                    </div>

                </div>
                    
                    {/* ratings widget */}
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
                    {reviews.map((review, index) => {
                        return (
                            <div className='w-full' key={`rev${index}`}>
                                {isMobile &&
                                    <ReviewCard review={review} index={index} />
                                }
                                {!isMobile &&
                                    <ReviewCardLarge review={review} index={index} />
                                }
                            </div>
                        )})
                    }
                    <div className='flex flex-col justify-start items-start w-full gap-y-8 md:items-center'>
                        <NewReviewWidgetLarge productName={name} productId={id}/>

                    </div>
                    
            </div>
        ) 

    }
}

export default ReviewsStarsBarsWidget