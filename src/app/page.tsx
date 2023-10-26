import Image from 'next/image'
import {BiSearch, BiCartAlt} from 'react-icons/bi'
import {RiMenu2Fill, RiUser3Fill} from 'react-icons/ri'
import SpaceTimeLogo from '../../public/assets/spacetime-logo.png'
import HeaderSlider from '../components/HeaderSlider'
import ProductSliderCard from '../components/ProductSliderCard'
import BigItemCard from '../components/BigItemCard'
import ArticleCard from '@/components/ArticleCard'
import {AiFillStar} from 'react-icons/ai'
import Login from '../components/Login'
import Register from '../components/Register'
import ForgotPassword from '../components/ForgotPassword'

export default function Home() {
  return (
    <div className='h-full w-full bg-white flex flex-col'>
      <Login/>
      {/* <Register/> */}
      {/* <ForgotPassword/> */}
    </div>
  )
}
