"use client"
import React, { useEffect, useState } from 'react';
import { Carousel } from 'flowbite-react';
import {AiFillStar} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaPaypal} from 'react-icons/fa'
import {LiaCoinsSolid} from 'react-icons/lia'
   
const HeaderSlider = () => {
    return (
        <div className='h-12 bg-gray-300 '>
            <Carousel slideInterval={5100} >
            {
            <div className='h-12 w-screen flex items-center justify-center gap-x-[2px]'>
                <div className='h-4 w-4 bg-black flex items-center justify-center'>
                    <AiFillStar color='#E0E0E0' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-black flex items-center justify-center'>
                    <AiFillStar color='#E0E0E0' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-black flex items-center justify-center'>
                    <AiFillStar color='#E0E0E0' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-black flex items-center justify-center'>
                    <AiFillStar color='#E0E0E0' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-black flex items-center justify-center'>
                    <AiFillStar color='#E0E0E0' size='12px'/>
                </div>
                <p className='text-black text-sm font-medium pl-2'>
                    4.85/5 ON TRUSTPILOT
                </p>
            </div>    
            }
            {
            <div className='h-12 w-screen flex items-center justify-center gap-x-[2px]'>
                <TbTruckDelivery color='black' size='25px'/>
                <p className='text-black text-sm font-medium pl-2'>
                    £4.95 ON UK DELIVERY
                </p>
            </div>  
            }
            {
             <div className='h-12 w-screen flex items-center justify-center gap-x-[2px]'>
                <FaPaypal color='black' size='25px'/>
                <p className='text-black text-sm font-medium pl-2'>
                    PAY IN 3 WITH PAYPAL
                </p>
            </div>   
            }
            {
            <div className='h-12 w-screen flex items-center justify-center gap-x-[2px]'>
                <LiaCoinsSolid color='black' size='25px'/>
                <p className='text-black text-sm font-medium pl-2'>
                    FINANCE AVAILABLE OVER £2,000
                </p>
            </div>
            }
            </Carousel>
        </div>
    )
}

export default HeaderSlider;