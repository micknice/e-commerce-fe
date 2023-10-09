import Image from 'next/image'
import {BiSearch, BiCartAlt} from 'react-icons/bi'
import {RiMenu2Fill, RiUser3Fill} from 'react-icons/ri'
import SpaceTimeLogo from '../../public/assets/spacetime-logo.png'
import HeaderSlider from '../components/HeaderSlider'
import ProductSliderCard from '../components/ProductSliderCard'

export default function Home() {
  return (
    <div className='h-full w-full '>
      {/* top image */}
      <div className=' h-44 relative z-10 '>
        <img className=' h-full w-full object-cover' src='https://images.pexels.com/photos/7534178/pexels-photo-7534178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      </div>
      <div className=' h-56 w-full px-4 pt-8 bg-white'>
        <div className=' h-full w-full flex flex-col gap-2'>
          <div className='h-6 w-3/4 outline outline-red-500 flex gap-x-[2px] items-center'>
            <div className='flex flex-col '>
              <p className='text-black text-[9px] tracking-tighter font-semibold'>GETTING STARTED</p>
              <div className='h-[2px] bg-black'></div>
            </div>
            <p className='text-black text-[9px] tracking-tighter font-semibold'>/</p>
            <div className='flex flex-col'>
              <p className='text-black text-[9px] tracking-tighter font-semibold'>HOMEGYM</p>
              <div className='h-[2px] bg-black'></div>
            </div>
            <p className='text-black text-[9px] tracking-tighter font-semibold'>/</p>
            <div className='flex flex-col'>
              <p className='text-black text-[9px] tracking-tighter font-semibold'>POWERLIFTING</p>
              <div className='h-[2px] bg-black'></div>
            </div>
            <p className='text-black text-[9px] tracking-tighter font-semibold'>/</p>
            <div className='flex flex-col'>
              <p className='text-black text-[9px] tracking-tighter font-semibold'>STRONGMAN</p>
              <div className='h-[2px] bg-black'></div>
            </div>
            

          </div>

          <div className='h-full w-full outline outline-orange-300 flex flex-row gap-x-2'>
            <ProductSliderCard/>
            <ProductSliderCard/>
            <ProductSliderCard/>

          </div>
        </div>
      </div>
    </div>
  )
}
