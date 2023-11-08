'use client'
import Image from 'next/image'
import RecaptchaImg from '../../public/assets/RecaptchaLogo.svg.png'
import {useState, useEffect, ChangeEvent} from 'react'
import {registerUser, verifyUser} from '../api/ecommerceApi'
import {useRouter, useSearchParams} from 'next/navigation'
import {HiRefresh} from 'react-icons/hi'




const Register = () => {

    const router = useRouter()

    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    const [cart, setCart] = useState([1])


    


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4">
            <div className="flex flex-col pb-4">
                <div className="h-20 flex justify-center items-center">
                    <p className="text-xl text-mira-black font-bold tracking-tighter">SHOPPING CART</p>
                </div>
                
                    {cart.length === 0 &&
                    <div className='flex flex-col'>
                        <p className='text-mira-subhead-text-black'>You have no items in your shopping cart</p>
                        <p className='text-mira-subhead-text-black'>Click here to continue shopping.</p>
                    </div>
                    }
                    {/* {cart.length !== 0 && */}
                    <div className='flex flex-col gap-y-10'>
                        <div className='flex flex-col bg-gray-100 p-4 gap-y-2'>
                            <p className='text-2xl text-mira-subhead-text-black tracking-wide'>Summary</p>
                            <div className='h-[1px] bg-mira-grey'/>
                            <div className='flex flex-col '>
                                {/* subtotal */}
                                <div className='grid grid-cols-5 py-2'>
                                    <div className='col-span-4 flex justify start items center'>
                                        <p className='text-sm tracking-wide'>Subtotal</p>
                                    </div>
                                    <div className='col-span-1'>
                                        <p className='text-sm tracking-wide'>£129.95</p>
                                    </div>
                                </div>
                                {/* shipping */}
                                <div className='grid grid-cols-5 py-2'>
                                    <div className='col-span-4 flex justify start items center'>
                                        <p className='text-sm tracking-wide'>{`Shipping (Standard - 3-5 Days)`}</p>
                                    </div>
                                    <div className='col-span-1'>
                                        <p className='text-sm tracking-wide'>£9.95</p>
                                    </div>
                                </div>
                                {/* order total */}
                                <div className='grid grid-cols-5 py-2'>
                                    <div className='col-span-4 flex justify start items center'>
                                        <p className='text-sm tracking-wide'>Order Total</p>
                                    </div>
                                    <div className='col-span-1'>
                                        <p className='text-sm tracking-wide'>£134.90</p>
                                    </div>
                                </div>
                                <div className='h-[1px] bg-mira-grey p'/>
                                <div className='h-10'/>
                                <div className='flex flex-col gap-y-4 pb-4'>
                                    <div className='h-12 w-full bg-mira-orange flex justify-center items-center'>
                                        <p className='text-white text-md font-semibold'>GO TO CHECKOUT</p>
                                    </div>
                                    <div className='h-12 w-full bg-paypal-blue flex justify-center items-center'>
                                        <img src='/assets/paypal.png' className='h-5'></img>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='h-auto flex flex-col gap-y-4'>
                            <p className='text-xs tracking-wide font-light'>Item</p>
                            <div className='h-[1px] bg-mira-grey'></div>
                            {/* checkout item */}
                            <div className='grid grid-rows-5 h-[30vh] '>
                                <div className='h-full row-span-2 flex flex-row justify-start items-center gap-x-4'>
                                    <img src='/mirafit-images/6-Mirafit-Dual-Handle-Cable-Attachment.jpg' className='h-5/6'/>
                                    <div className='flex h-2/6 items-start'>
                                        <p className='text-xs tracking-wide'>Mirafit M1 Preacher Curl Bench</p>
                                    </div>
                                   

                                </div>
                                <div className='row-span-2 grid grid-cols-3'>
                                    <div className='col-span-1 h-full flex flex-col items-center justify-center gap-y-2'>
                                        <p className='text-sm font-semibold tracking-wide'>Price:</p>
                                        <p className='text-sm font- tracking-wide'>£129.95</p>
                                    </div>
                                    <div className='col-span-1 h-full flex flex-col items-center justify-center gap-y-2'>
                                        <p className='text-sm font-semibold tracking-wide'>Qty:</p>
                                        <div className='border h-8 w-12 flex justify-center items-center'>
                                            <p className='text-sm font- tracking-wide'>1</p>
                                        </div>
                                    </div>
                                    <div className='col-span-1 h-full flex flex-col items-center justify-center gap-y-2'>
                                        <p className='text-sm font-semibold tracking-wide'>Subtotal:</p>
                                        <p className='text-sm font- tracking-wide'>£129.95</p>
                                    </div>
                                </div>
                                <div className='row-span-1 flex flex-row items-center justify-center gap-x-4 pb-4'>
                                    <div className='bg-mira-headtext flex items-center justify-center h-8 px-3'>
                                        <p className='text-white text-sm font-light tracking-wide'>Edit</p>
                                    </div>
                                    <div className='bg-mira-headtext flex items-center justify-center h-8 px-3'>
                                        <p className='text-white text-sm font-light tracking-wide'>Remove Item</p>
                                    </div>
                                </div>
                                <div className='h-[1px] bg-mira-grey '/>
                                

                            </div>
                            <div className='w-full flex flex-col items-center justify-center gap-y-2 '>
                                    <div className='bg-mira-headtext flex items-center justify-center h-8 px-3'>
                                        <p className='text-white text-sm font-light tracking-wide'>Continue Shopping</p>
                                    </div>
                                    <div className='bg-mira-headtext flex items-center justify-center h-8 px-3'>
                                        <p className='text-white text-sm font-light tracking-wide'>Clear Shopping Cart</p>
                                    </div>
                                    <div className='bg-mira-headtext flex flex-row items-center justify-center h-8 px-3 text-white gap-x-4'>
                                        <HiRefresh/>
                                        <p className='text-white text-sm font-light tracking-wide'>Update Cart</p>
                                    </div>

                            </div>

                        </div>
                    </div>
                    {/* }  */}
                
                
                
               
            </div>
            

        </div>
    )



}


export default Register