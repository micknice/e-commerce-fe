'use client'
import {AiFillStar} from 'react-icons/ai'
import RecaptchaImg from '../../public/assets/RecaptchaLogo.svg.png'
import { useState, useEffect, ChangeEvent } from 'react'
import {postReview} from '../api/ecommerceApi'
import {useCurrentUser} from '../api/auth/useCurrentUser'

interface NewReviewWidgetProps {
    productName: string
    productId: number
}

const NewReviewWidget = ({productName, productId}: NewReviewWidgetProps) => {
    const currentUser = useCurrentUser()

    const [nickName, setNickname] = useState('')
    const [summary, setSummary] = useState('')
    const [review, setReview] = useState('')
    const [stars, setStars] = useState([1,2,3,4,5])
    const [rating, setRating] = useState(0)

    const handleNickChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('!!!!')
        setNickname(e.target.value)
        console.log(e.target.value)
    }
    const handleSummaryChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('!!!!')
        setSummary(e.target.value)
        console.log(e.target.value)
    }
    const handleReviewChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('!!!!')
        setReview(e.target.value)
        console.log(e.target.value)
    }
    const handleStarSelect = (ratingStars: number) => {
        setRating(ratingStars)

    }

    const handleSubmit = async() => {
        console.log('handle!!!')
        if (currentUser) {
            if (review.length > 10 && summary.length > 1 && rating > 0) {
               const res = await postReview(currentUser.jwt, productId, currentUser.user.id, summary, review, rating, nickName) 
            }
        }
    }
    
    return (
        <div className='w-full md:w-1/3 bg-gray-200 flex flex-col p-4 gap-y-8 '>
            <div className='flex flex-col'>
                <p className='text-sm font-lighttracking-wide'>{`YOU'RE REVIEWING:`}</p>
                <p className='text-xl font-semibold tracking-tight'>{productName}</p>
            </div>
            <div className='flex flex-row items-center justify-start gap-x-8 outlin'>
                <p className='font-semibold'>Review</p>
                <div className='h-auto w-auto flex items-center justify-start gap-x-[6px] '>
                    {stars.map((star, index) => {
                        if (rating < star) {
                            return(
                                <div className='h-auto w-5 text-mira-grey flex items-center justify-center relative' onClick={() => {handleStarSelect(star)}} key={`revSt${star}`}>
                                    <AiFillStar className='star-icon' size='18px' />
                                </div>
                            )
                        } else {
                            return(
                                <div className='h-auto w-5 text-mira-orange flex items-center justify-center relative' onClick={() => {handleStarSelect(star)}} key={`revSt${star}`}>
                                    <AiFillStar className='star-icon' size='18px' />
                                </div>
                            )
                        }
                    })}
                </div>
                <div>
                    
                </div>
            </div>
            <div className='flex flex-col'>
                <p>Nickname</p>
                <input className='border border-grey-400 h-8' type="text" onChange={(e) => {handleNickChange(e)}}></input>
            </div>
            <div className='flex flex-col'>
                <p>Summary</p>
                <input className='border border-grey-400 h-8'type="text" onChange={(e) => {handleSummaryChange(e)}}></input>
            </div>
            <div className='flex flex-col'>
                <p>Review</p>
                <input className='border border-grey-400 h-20' type="text" onChange={(e) => {handleReviewChange(e)}}></input>
            </div>
            <div className='flex flex-col gap-y-3'>
                <div className="h-16 w-3/4 grid grid-cols-4 shadow-lg border-gray-300 border-2">
                    <div className="bg-blue-500 col-span-3 flex flex-col items-start justify-center px-4 gap-y-1">
                        <p className="text-white text-sm">protected by reCAPTCHA</p>
                        <div className="flex gap-x-2">
                            <p className="text-white text-xs">Privacy</p>
                            <p className="text-white text-xs">-</p>
                            <p className="text-white text-xs">Terms</p>
                        </div>
                    </div>
                    <img src='/assets/RecaptchaLogo.svg.png' alt='/'/>
                </div>
                <div className='bg-mira-orange h-11 w-full flex justify-center items-center' onClick={()=> {handleSubmit()}}>
                    <p className='text-white text-sm font-bold'>SUBMIT REVIEW</p>
                </div>
            </div>

        </div>
    )
}

export default NewReviewWidget