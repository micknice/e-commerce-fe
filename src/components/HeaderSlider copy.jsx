"use client"
import React, { useEffect, useState } from 'react';
import { Carousel } from 'flowbite-react';
import {AiFillStar} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaPaypal} from 'react-icons/fa'
import {LiaCoinsSolid} from 'react-icons/lia'
   
const HeaderSlider = () => {
    return (
        <div className='h-[41px] bg-mira-grey pointer-events-none'>
            <div className='h-11 w-screen flex items-center justify-center gap-x-[2px]'>
                <div className='h-4 w-4 bg-mira-black flex items-center justify-center'>
                    <AiFillStar color='#c3c3c4' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-mira-black flex items-center justify-center'>
                    <AiFillStar color='#c3c3c4' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-mira-black flex items-center justify-center'>
                    <AiFillStar color='#c3c3c4' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-mira-black flex items-center justify-center'>
                    <AiFillStar color='#c3c3c4' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-mira-black flex items-center justify-center'>
                    <AiFillStar color='#c3c3c4' size='12px'/>
                </div>
                <p className='text-mira-subhead-text-black text-sm  pl-2'>
                    4.85/5 ON TRUSTPILOT
                </p>
            </div>  
            {/* <Carousel  slideInterval={5100} >
            {
            <div className='h-11 w-screen flex items-center justify-center gap-x-[2px]'>
                <div className='h-4 w-4 bg-mira-black flex items-center justify-center'>
                    <AiFillStar color='#c3c3c4' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-mira-black flex items-center justify-center'>
                    <AiFillStar color='#c3c3c4' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-mira-black flex items-center justify-center'>
                    <AiFillStar color='#c3c3c4' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-mira-black flex items-center justify-center'>
                    <AiFillStar color='#c3c3c4' size='12px'/>
                </div>
                <div className='h-4 w-4 bg-mira-black flex items-center justify-center'>
                    <AiFillStar color='#c3c3c4' size='12px'/>
                </div>
                <p className='text-mira-subhead-text-black text-sm  pl-2'>
                    4.85/5 ON TRUSTPILOT
                </p>
            </div>    
            }
            {
            <div className='h-11 w-screen flex items-center justify-center gap-x-[2px]'>
                <TbTruckDelivery color='#1d1d1b' size='25px'/>
                <p className='text-mira-subhead-text-black text-sm  pl-2'>
                    £4.95 ON UK DELIVERY
                </p>
            </div>  
            }
            {
             <div className='h-11 w-screen flex items-center justify-center gap-x-[2px]'>
                <FaPaypal color='#1d1d1b' size='25px'/>
                <p className='text-mira-subhead-text-black text-sm  pl-2'>
                    PAY IN 3 WITH PAYPAL
                </p>
            </div>   
            }
            {
            <div className='h-11 w-screen flex items-center justify-center gap-x-[2px]'>
                <LiaCoinsSolid color='black' size='25px'/>
                <p className='text-mira-subhead-text-black text-sm pl-2'>
                    FINANCE AVAILABLE OVER £2,000
                </p>
            </div>
            }
            </Carousel> */}
        </div>
    )
}

export default HeaderSlider;