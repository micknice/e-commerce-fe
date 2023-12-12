
interface RatingsWidgetProps {
    star5: number
    star4: number
    star3: number
    star2: number
    star1: number
    reviews: any[]
}
const RatingsBarsWidget = ({star5, star4, star3, star2, star1, reviews}: RatingsWidgetProps) => {
    return (
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
    )
}

export default RatingsBarsWidget