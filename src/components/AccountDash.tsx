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
import { Client, IMessage, StompHeaders } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { activeUrl } from '../../url'


const AccountDash = () => {
    const {logout} = useLogout()
    
    const router = useRouter()
    const currentUser: UserType | null = useCurrentUser()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [messages, setMessages] = useState<string[]>([]);
    const [stompClient, setStompClient] = useState<Client | null>(null);
    const [headers, setHeaders] = useState({})

    const connect = () => {
        const socket = new SockJS(`http://${activeUrl}/websocket`); 
        const headers = {
          Authorization: `Bearer ${currentUser?.jwt}`, 
        };
        const stomp = new Client({
          webSocketFactory: () => socket,
          connectHeaders: headers,
        });

        stomp.onConnect = () => {
            console.log("connected")
            setTimeout(() => {
                console.log('set timeout')
                subscribe();
              }, 5000);
        }
        stomp.activate();
        setStompClient(stomp);
        // stomp.subscribe('http:localhost:8080/websocket/topic/user/604/address', (message) => {
        //   console.log('Received message:', message);
        //   // Handle incoming messages here
        // }, headers);
      };

      const subscribe = () => {
        
        stompClient?.subscribe('/topic/user/604/address', (message) => {
            console.log('Received message:', message.body);
            
          }, headers);

      }
    
      const disconnect = () => {
        if (stompClient) {
          stompClient.deactivate();
          setStompClient(null);
          console.log('Disconnected');
        }
      };
    
      const sendMessage = () => {
        console.log('send message invoked')
        console.log('stompClient', stompClient)
        if (stompClient) {
          const headers = {
            Authorization: `Bearer ${currentUser?.jwt}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Content-Type': 'application/json; charset=UTF-8',
          };
          stompClient.publish({
            destination: 'http://localhost:8080/websocket/topic/user/604/address',
            headers,
            body: JSON.stringify('Your message'),
          });
          console.log('Message sent');
        }
      };

    useEffect(()=> {
        if (currentUser) {
            console.log(currentUser, "currentUserdash")
            try {
                setHeaders({
                    Authorization: `Bearer ${currentUser?.jwt}`,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Credentials': 'true',
                    'Content-Type': 'application/json; charset=UTF-8',
                  })
                connect()
                // subscribe()

            } catch (err) {

            }

        }
    }, [currentUser, ])

    const handleEmailNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                    {/* {currentUser &&
                        <p className="text-2xl text-mira-black font-bold tracking-tighter">{currentUser.user.id}</p>
                    } */}

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
                    <div className='flex flex-col items-center justify-center py-2 gap-y-2 group hover:text-mira-orange hover:scale-105' onClick={()=> {router.push('/user/account/address')}}>
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