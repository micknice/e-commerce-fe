'use client'
import Image from 'next/image'
import RecaptchaImg from '../../public/assets/RecaptchaLogo.svg.png'
import {useState, useEffect, ChangeEvent} from 'react'
import {registerUser} from '../api/ecommerceApi'
import {useRouter} from 'next/navigation'



const Register = () => {

    const router = useRouter()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, '!!!')
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, '!!!')
        setLastName(e.target.value)
    }
    const handleEmailNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, '!!!')
        setEmail(e.target.value)
    }
    const handlePasswordNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, '!!!')
        setPassword(e.target.value)
    }
    const handleSubmit = async() => {
        console.log(' submit')
        if (firstName && lastName && email && password) {
            console.log('condition passed')
            const response = await registerUser(firstName, lastName, email, password)
            if (response.status === 409) {
                console.log('CONFLICT - USER ALREADY EXISTS WITH THIS EMAIL')
            } else if (response.status === 500) {
                console.log('INTERNAL SERVER ERROR')
            } else if (response.status === 200) {
                console.log('OK- VERIFICATION EMAIL SENT')
                router.push('/auth/verify')
            }
        }
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4">
            <div className="flex flex-col">
                <div className="h-20 flex justify-center items-center">
                    <p className="text-xl text-mira-black font-bold tracking-tighter">CREATE NEW CUSTOMER ACCOUNT</p>
                </div>
                <p className="text-xl text-mira-black font-semibold tracking-widest">Personal Information</p>
                <div className="h-3"/>
                <div className="h-[1px] bg-gray-200"/>
                <form className="flex flex-col gap-y-3">
                <div className="pt-2">
                    <div className="flex gap-x-2">
                        <p className="text-sm font-semibold">First Name</p><p className="text-mira-text-red">*</p>
                    </div>
                    <input type="text" className="h-9 w-3/4 border-gray-200" onChange={(e)=> {handleFirstNameChange(e)}}></input>
                </div>
                <div>
                    <div className="flex gap-x-2">
                        <p className="text-sm font-semibold">Last Name</p><p className="text-mira-text-red">*</p>
                    </div>
                    <input type="text" className="h-9 w-3/4 border-gray-200" onChange={(e)=> {handleLastNameChange(e)}} ></input>
                </div>
                <div className="flex flex-row gap-x-2 items-center">
                    <input type="checkbox" className="h-3 w-3"></input>
                    <p className="text-sm">Allow remote shopping assistance.</p>
                </div>
                <div className="h-3"/>
                </form>
                
            </div>
            <div className='md:pt-[80px]'>
            <form className="flex flex-col gap-y-3">
                    <p className="text-xl text-mira-black font-semibold tracking-widest">Sign-in Information</p>
                    <div className="h-[1px] bg-gray-200"/>
                    <div className="pt-2 md:pt-0">
                        <div className="flex gap-x-2">
                            <p className="text-sm font-semibold">Email</p><p className="text-mira-text-red">*</p>
                        </div>
                        <input type="text" className="h-9 w-3/4 border-gray-200" onChange={(e)=> {handleEmailNameChange(e)}}></input>
                    </div>
                    {/* <div className='md:'/> */}
                    <div>
                        <div className="flex gap-x-2">
                            <p className="text-sm font-semibold">Password</p><p className="text-mira-text-red">*</p>
                        </div>
                        <input type="password" className="h-9 w-3/4 border-gray-200" onChange={(e)=> {handlePasswordNameChange(e)}}></input>
                    </div>
                    <div className=''/>
                    <div className="flex flex-row gap-x-2 items-center">
                        <input type="checkbox" className="h-3 w-3"></input>
                        <p className="text-sm">Show Password.</p>
                    </div>
                    <div className='h-2'/>
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
                        <p className='text-white text-xs font-medium'>SIGN UP</p>
                    </div>
                    <div className='h-5'/>                    
                </form>
            </div>
            

        </div>
    )



}


export default Register