import React, { useEffect, useState } from 'react';

const ProductSliderCard = () => {
    return (
        <div className='w-1/3 flex flex-col items-center gap-y-2'>
            <div className='h-5/6  '>
                <img className=' h-full w-full object-cover' src='https://images.pexels.com/photos/7534178/pexels-photo-7534178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
            <p className='text-black text-xs font-bold tracking-tight'>HEX DUMBELLS</p>
        </div>
        
    )

}

export default ProductSliderCard
