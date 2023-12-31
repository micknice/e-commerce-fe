'use client'
import Image from 'next/image'
import RecaptchaImg from '../../public/assets/RecaptchaLogo.svg.png'
import { useState, ChangeEvent } from 'react'
import {useRouter} from 'next/navigation'
import {useLogin} from '../api/auth/useLogin'
import {useCurrentUser} from '../api/auth/useCurrentUser'
import Link from 'next/link'



const Login = () => {
    const currentUser = useCurrentUser()
    const router = useRouter()
    const {login} = useLogin()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const handleGoToRegister = async() => {
        router.push('/user/register')
    }
    const handleSubmit = async() => {
        const user = await login(email, password)
        console.log('useLogin response', user)
        if (user.success) {
            router.push('/user/account/dashboard')
        }
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4">
            <div className="flex flex-col">
                <div className="h-20 flex justify-center items-center">
                    <p className="text-2xl text-mira-black font-bold tracking-tighter">CUSTOMER LOGIN</p>

                </div>
                {/* <div className='bg-mira-sage h-16 w-full flex p-3 gap-x-3 '>
                    <GiCheckMark size='20px'/>
                    <div className='flex items-start'>
                        <p className='text-xs tracking-wide'>If there is an account associated with  you will receive an email with a link to reset your password.</p>
                    </div>
                </div> */}
                <div className='h-4'/>
                <p className="text-xl text-mira-black font-semibold tracking-widest">Registered Customers</p>
                <div className="h-3"/>
                <div className="h-[1px] bg-gray-200"/>
                <form className="flex flex-col gap-y-3">
                    <p className="text-sm pt-4">Enter your email and password to login.</p>
                    <div className="pt-2">
                        <div className="flex gap-x-2">
                                <p className="text-sm">Email</p>
                                {!email &&
                                    <p className="text-mira-text-red">*</p>
                                }
                        </div>
                        <input type="text" className="h-9 w-3/4 border-gray-200" onChange={(e)=>{handleEmailNameChange(e)}}></input>
                    </div>
                    <div>
                        <div className="flex gap-x-2">
                            <p className="text-sm">Password</p>
                            {!password &&
                                <p className="text-mira-text-red">*</p>
                            }
                        </div>
                        <input type="password" className="h-9 w-3/4 border-gray-200" onChange={(e)=>{handlePasswordChange(e)}}></input>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center">
                        <input type="checkbox" className="h-3 w-3"></input>
                        <p className="text-sm">Remember Me.</p>
                    </div>
                    <div className="h-16 w-3/4 grid grid-cols-4 md:flex  md:w-1/2 shadow-lg border-gray-100 border-2">
                        <div className="bg-blue-500 col-span-3 flex flex-col items-start justify-center px-4 gap-y-1">
                            <p className="text-white text-sm">protected by reCAPTCHA</p>
                            <div className="flex gap-x-2">
                                <p className="text-white text-xs">Privacy</p>
                                <p className="text-white text-xs">-</p>
                                <p className="text-white text-xs">Terms</p>
                            </div>
                        </div>
                        <Image src={RecaptchaImg} alt='/' className='md:h-16 md:w-16'/>
                    </div>
                    <div className=''/>
                    <div className='bg-mira-orange h-11 w-1/2 flex justify-center items-center' onClick={handleSubmit}>
                        <p className='text-white text-xs font-medium'>SIGN IN</p>
                    </div>
                    <Link href={`/user/forgotPassword`}><p className="text-sm pt-3">Forgot Your Password?</p></Link>
                    <div className='flex items-center justify-center pt-2'>
                        <p className="text-mira-text-red text-xs">* Required Fields</p>
                    </div>
                </form>
                
               
            </div>
            <div className='pt-9 '>
                <div className='md:h-[60px]'></div>
                <p className="text-xl text-mira-black font-semibold tracking-widest">New Customers</p>
                <div className="h-3"/>
                <div className="h-[1px] bg-gray-200"/>
                <p className="text-sm pt-4 ">Creating an account has many benefits: check out faster,
                keep more than one address, track orders and more.
                </p>
                <div className='h-4'/>
                <div className='bg-mira-orange h-11 w-1/2 flex justify-center items-center' onClick={handleGoToRegister}>
                        <p className='text-white text-xs font-medium'>SIGN UP</p>
                </div>
                <div className='h-6'/>
                
            </div>

        </div>
    )



}


export default Login