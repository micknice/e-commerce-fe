'use client'
import Link from 'next/link'
import { useState, ChangeEvent } from 'react'
import { forgotPassword } from '@/api/ecommerceApi'


const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [emailSent, setEmailSent] = useState(false)

    const handleSubmit = async() => {
        console.log(email)
        const response = await forgotPassword(email)
        console.log('response', response)

    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        console.log(email)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4">
            <div className="flex flex-col">
                <div className="h-20 flex justify-center items-center">
                    <p className="text-2xl text-mira-black font-bold tracking-tighter hover:text-mira-orange">FORGOT YOUR PASSWORD?</p>
                </div>
                <form className="flex flex-col gap-y-3">

                    <p className="text-sm  tracking-wide ">Please enter your email address below to receive a password reset link.</p>
                    <div className="pt-2">
                        <div className="flex gap-x-2">
                            <p className="text-sm font-semibold">Email</p><p className="text-mira-text-red">*</p>
                        </div>
                        <input type="text" className="h-9 w-3/4 border-gray-400 " onChange={(e)=>{handleChange(e)}}></input>
                    </div>
                    
                    <div className=''/>
                        <div className='bg-mira-orange h-11 w-1/2 flex justify-center items-center' onClick={handleSubmit}>
                            <p className='text-white text-xs font-semibold'>RESET MY PASSWORD</p>
                        </div>
                    <div/>
                    <div className='h-1'/>
                    
                </form>
                
               
            </div>
            

        </div>
    )



}


export default ForgotPassword