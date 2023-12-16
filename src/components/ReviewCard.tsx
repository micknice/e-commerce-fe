import { convertDateFormat } from '../../utils/utils'
import { AiFillStar } from 'react-icons/ai'

interface ReviewCardProps {
    index: number
    review: any
}

const starArrayForMap = [0.1, 0.3, 0.5, 0.7, 0.9]

const ReviewCard = ({index, review}: ReviewCardProps) => {
    return (
        <div className='flex flex-col justify-start items-start w-full gap-y-1 px-4'>
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
                                    <div className='h-full w-auto flex items-center justify-center relative' key={`st${index}`}>
                                        <AiFillStar  size='20px' color='#ed9d00' opacity={`${20}%`} />
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                <p className='text-sm tracking-wide text-mira-subhead-text-black'>{review.body}</p>
            </div>
        </div>
    )
}

export default ReviewCard