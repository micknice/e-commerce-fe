'use client'
import Image from 'next/image'
import {BiSearch, BiCartAlt, BiPlus} from 'react-icons/bi'
import {RiMenu2Fill, RiUser3Fill} from 'react-icons/ri'
import SpaceTimeLogo from '../../public/assets/spacetime-logo.png'
import HeaderSlider from '@/components/HeaderSlider'
import {useState, useEffect} from 'react'


const categories = ['Strength Equipment', 'Weights & Bars', 'Conditioning', 'Gym Storage', 'Accessories', 'Packages', 'Shop By Range', 'Offers', 'Blog']

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClick = () => {
      setMenuOpen(!menuOpen);
      console.log(menuOpen)
    }


    return (
        <div className='h-full w-full bg-mira-black'>
        {/* header */}
        <div className='h-[180px] w-full grid grid-rows-2'>
          <div className='row-span-1 grid grid-cols-7'>
            <div onClick={handleMenuClick} className=' col-span-2 flex items-center justify-center gap-x-2 pt-4'>
                <RiMenu2Fill color='white' size='24px'/>
                <p className='text-sm text-white'>Menu</p>
              </div>
            <div className=' col-span-3 flex items-end justify-start pr'>
              <Image className='h-5/6 object-scale-down' alt='/spacetime' src={SpaceTimeLogo} width={150} height={30}/>
  
            </div>
            <div className=' col-span-2 flex items-center justify-center relative pt-4'>
              <div className='flex flex-row gap-x-2 items-end'>
                <RiUser3Fill color='white' size='22px'/>
                <BiCartAlt color='white' size='20px'/>
              </div>
              <div className='h-5 w-5 rounded-full bg-mira-cart-red relative -top-3 -left-2 flex items-center justify-center'>
                <p className='text-white text-sm'>0</p>
              </div>
  
            </div>
          </div>
          {/* search bar div */}
          <div className='row-span-1 flex items-start justify-center pt-3'>
            <div className=' bg-mira-offwhite rounded-full h-10 w-74 grid grid-cols-8'>
              <div className='col-span-2 flex items-center justify-center px-2'>
                <p className='text-center text-[16px] text-mira-black tracking-tighter leading-loose pl-1'>SEARCH</p>
  
              </div>
              <div className='col-span-5'>
                
  
              </div>
              <div className='col-span-1 flex items-center justify-center gap-x-2'>
                <BiSearch className='text-gray-900 text-[26px]'/>
              </div>
  
  
            </div>
          </div>
        </div>

        {menuOpen &&
          <div className='h-auto w-full grid grid-rows-2 px-3'>
            {categories.map(category => {
              return (
                <div className=' h-11 items-center pl-2 grid grid-cols-3 border-t-2 '>
                  <p className='text-mira-offwhite col-span-2'>{category}</p>
                  <div className='flex col-span-1 justify-end items-center  px-5'>
                    <BiPlus color='white' size='20px'/>
                  </div>
                </div>
            )}
          )}
          </div>
        }
        {/* info slider */}
        <HeaderSlider/>
      </div>
    )
}

export default Header