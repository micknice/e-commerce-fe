'use client'
import Image from 'next/image'
import RecaptchaImg from '../../public/assets/RecaptchaLogo.svg.png'
import {GiCheckMark} from 'react-icons/gi'
import {TbTruckDelivery, TbLogout2} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegAddressBook} from 'react-icons/fa'
import {MdOutlineSwitchAccount, MdSecurity} from 'react-icons/md'
import { useState, useEffect, ChangeEvent } from 'react'
import {useRouter} from 'next/navigation'
import {useCurrentUser} from '../api/auth/useCurrentUser'
import {useLogout} from '../api/auth/useLogout'
import {UserType} from '../api/auth/UserType'


const AccountDash = () => {
    const {logout} = useLogout()
    
    const router = useRouter()
    const currentUser: UserType | null = useCurrentUser()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, '!!!')
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, '!!!')
        setPassword(e.target.value)
    }
    const handleGoToRegister = async() => {
        router.push('/user/register')
    } 

    const handleLogOut = async() => {
        logout()
        router.push('/user/login')
        
    }
    return (
        <div className="grid grid-cols-1  px-4 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <p className='text-ellipsis'>{}</p>
                <div className="h-20 flex justify-center items-center">
                    <p className="text-2xl text-mira-black font-bold tracking-tighter">ACCOUNT</p>

                </div>
                {currentUser &&
                    <p>Welcome back {currentUser.user.firstName}</p>
                }
                <div className='h-[1px] bg-mira-grey'></div>
                <div className='grid grid-cols-2 xl:grid-cols-3 justify-center items-center gap-y-4 py-4'>
                    <div className='flex flex-col items-center justify-center py-2 gap-y-2 group hover:text-mira-orange hover:scale-105' onClick={()=> {router.push('/user/account/orders')}}>
                        <TbTruckDelivery size='50px'/>
                        <p className='font-semibold'>MY ORDERS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-2 gap-y-2 group hover:text-mira-orange hover:scale-105' onClick={()=> {router.push('/user/account/wishlist')}}>
                        <AiOutlineHeart size='50px'/>
                        <p className='font-semibold'>WISH LIST</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-2 gap-y-2 group hover:text-mira-orange hover:scale-105' onClick={()=> {router.push('/user/account/addresses')}}>
                        <FaRegAddressBook size='50px'/>
                        <p className='font-semibold'>ADDRESS BOOK</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-2 gap-y-2 group hover:text-mira-orange hover:scale-105' onClick={()=> {router.push('/user/account/info')}}>
                        <MdOutlineSwitchAccount size='50px'/>
                        <p className='font-semibold'>ACCOUNT INFO</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-2 gap-y-2 group hover:text-mira-orange hover:scale-105' onClick={()=> {router.push('/user/account/privacy')}}>
                        <MdSecurity size='50px'/>
                        <p className='font-semibold'>PRIVACY SETTINGS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center py-2 gap-y-2 group hover:text-mira-orange hover:scale-105' onClick={handleLogOut}>
                        <TbLogout2 size='50px'/>
                        <p className='font-semibold'>LOG OUT</p>
                    </div>

                </div>
                
                
                
                
               
            </div>
            

        </div>
    )



}


export default AccountDash