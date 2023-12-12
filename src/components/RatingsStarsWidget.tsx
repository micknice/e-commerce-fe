import {AiFillStar} from 'react-icons/ai'

interface RatingsStarsWidgetProps {
    aveRating: number
    reviews: any[]
}

const starArrayForMap = [0.1, 0.3, 0.5, 0.7, 0.9]

const RatingsStarsWidget = ({aveRating, reviews}: RatingsStarsWidgetProps) => {
    return (
        <div className='grid grid-cols-5 items-center justify-center  w-full'>
                        
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
                                    <div className='h-full w-auto   flex items-center justify-center relative' key={`st${index}`}>
                                        <AiFillStar  size='30px' color='#ed9d00' opacity={`${20}%`} />
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
    )
}

export default RatingsStarsWidget