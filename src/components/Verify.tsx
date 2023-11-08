'use client'
import Image from 'next/image'
import RecaptchaImg from '../../public/assets/RecaptchaLogo.svg.png'
import {useState, useEffect, ChangeEvent} from 'react'
import {registerUser, verifyUser} from '../api/ecommerceApi'
import {useRouter, useSearchParams} from 'next/navigation'




const Register = () => {

    const router = useRouter()

    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verified, setVerified] = useState(false)

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
    const handleGoToLogin = async() => {
        router.push('/user/login')
    }

    useEffect(() => {
        console.log('!!!useeffect')
        if(token) {
            const verifyToken = async() => {
                console.log('await verify')
                const response = await verifyUser(token)
                console.log('response', response.status)
                if(response.status === 200) {
                    console.log('OK - email verified')
                    setVerified(true)
                } else if (response.status === 409){
                    console.log('CONFLICT - BAD TOKEN')
                    // TODO: HANDLE BAD TOKEN RES-END
                } else if (response.status === 500) {
                    console.log('500 - internal server error')
                }
            }
            verifyToken()
        }

    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4">
            <div className="flex flex-col">
                <div className="h-20 flex justify-center items-center">
                    <p className="text-xl text-mira-black font-bold tracking-tighter">VERIFY</p>
                </div>
                <p className="text-xl text-mira-black font-semibold tracking-widest">Email Verification</p>
                <div className="h-3"/>
                <div className="h-[1px] bg-gray-200"/>
                {!token &&
                    <p>An email has been sent to your registed email address. Please follow the link in the email to verify your account before logging in.</p>

                }
                {token && !verified &&
                    <p>Verifying...</p>

                }
                {token && verified &&
                    <p>Your account has been verified successfully. Please proceed to login.</p>

                }
                <div className="h-3"/>
                <div className="h-[1px] bg-gray-200"/>
                <div className='bg-mira-orange h-11 w-1/2 flex justify-center items-center' onClick={handleGoToLogin}>
                    <p className='text-white text-xs font-medium'>GO TO LOGIN</p>
                </div>
                
                
               
            </div>
            

        </div>
    )



}


export default Register