'use client'
import Image from 'next/image'
import {BiSearch, BiCartAlt} from 'react-icons/bi'
import {RiMenu2Fill, RiUser3Fill} from 'react-icons/ri'
import SpaceTimeLogo from '../../public/assets/spacetime-logo.png'
import HeaderSlider from '@/components/HeaderSlider'

const Header = () => {
    return (
        <div className='h-full w-full '>
        {/* header */}
        <div className='h-44 w-full grid grid-rows-2'>
          <div className='row-span-1 grid grid-cols-7'>
            <div className=' col-span-2 flex items-center justify-center gap-x-2'>
                <RiMenu2Fill color='white' size='24px'/>
                <p className='text-sm'>Menu</p>
              </div>
            <div className=' col-span-3 flex items-end justify-center'>
              <Image className='h-5/6 object-scale-down' alt='/spacetime' src={SpaceTimeLogo} width={150} height={30}/>
  
            </div>
            <div className=' col-span-2 flex items-center justify-center relative'>
              <div className='flex flex-row gap-x-2 items-end'>
                <RiUser3Fill color='white' size='22px'/>
                <BiCartAlt color='white' size='20px'/>
              </div>
              <div className='h-5 w-5 rounded-full bg-red-500 relative -top-3 -left-2 flex items-center justify-center'>
                <p className='text-white text-sm'>0</p>
              </div>
  
            </div>
          </div>
          {/* search bar div */}
          <div className='row-span-1 flex items-center justify-center'>
            <div className=' bg-white rounded-full h-10 w-74 grid grid-cols-8'>
              <div className='col-span-2 flex items-center justify-center px-2'>
                <p className='text-center text-[16px] text-gray-900 font- leading-loose'>SEARCH</p>
  
              </div>
              <div className='col-span-5'>
                
  
              </div>
              <div className='col-span-1 flex items-center justify-center gap-x-2'>
                <BiSearch className='text-gray-900 text-[26px]'/>
              </div>
  
  
            </div>
          </div>
        </div>
        {/* info slider */}
        <HeaderSlider/>
      </div>
    )
}

export default Header