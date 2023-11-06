'use client'
import Image from 'next/image'
import {BiSearch, BiCartAlt} from 'react-icons/bi'
import {RiMenu2Fill, RiUser3Fill} from 'react-icons/ri'
import SpaceTimeLogo from '../../public/assets/spacetime-logo.png'
import HeaderSlider from '@/components/HeaderSlider'
import {useState} from 'react'
import Link from 'next/link'

import MenuCategory from './MenuCategory'


const categories = ['Strength Equipment', 'Weights & Bars', 'Conditioning', 'Gym Storage', 'Accessories', 'Packages', 'Shop By Range', 'Offers', 'Blog']

const strengthEquipmentCategories = ['Gym Machines & Attachments', 'Landmine Posts & Handles', 'Parallel Bars', 
'Power Cages & Racks', 'Power Rack Attachments', 'Pull Up Bars', 'Sit Up Benches & Bars', 'Squat Racks & Stands', 'Weight Benches', 'Weightlifting Equipment']

const weightsAndBarsCategories = ['Bars', 'Bumper Plates', 'Dumbells', 'Kettlebells', 'Medicin Balls', 'Sandbags', 
'Slam Balls', 'Weight Plates', 'Weight Sets & Kits', 'Wearable Weights']

const conditioningCategories = ['Battle Ropes', 'Boxing Equipment', 'Cardio Equipment', 'Core Sliders', 'Exercise Mats', 
'Exercise Steps', 'Hula Hoops', 'Pilates & Yoga', 'Plyo Jump Boxes', 'Push Up Handles', 'Resistance Bands', 'Rollers', 'Skipping Ropes']

const gymStorageCategories = ['Bar Storage', 'Dumbell Storage', 'Freestanding Gym Storage', 'Kettlebell Storage', 'Plate Storage',
'Rack Mounted Storage', 'Wall Mounted Storage']

const accessoriesCategories = ['Barbell Pads', 'Clothing & Apparel', 'Gift Vouchers', 'Grip Training', 'Gym Floor Mats', 'Gym Flags',
'Gym Interval Timers', 'Lifting Straps, Wraps & Sleeves', 'Merchandise', 'Spares & Replacements', 'Tools', 'Weightlifting Belts']

const shopByRangeCategory = ['Calisthenics', 'Climbing', 'Commercial Gym Equipment', 'Olympic Weightlifting', 'Powerlifting', 'Strongman']

const offersCategories = ['Offers - Strength Equipment', 'Offers - Weights & Bars', 'Offers - Everything Else']

const subCategoriesArray = [strengthEquipmentCategories, weightsAndBarsCategories, conditioningCategories, gymStorageCategories, accessoriesCategories, [], shopByRangeCategory, offersCategories, []]

const Header = () => {

    const [mainMenuOpen, setMainMenuOpen] = useState(false)

    const handleMainMenuClick = () => {
      setMainMenuOpen(!mainMenuOpen);
      console.log(mainMenuOpen)
    }


    return (
        <div className='h-full w-full bg-mira-black'>
        {/* header */}
        <div className='h-[180px] w-full grid grid-rows-2'>
          <div className='row-span-1 grid grid-cols-7'>
            <div onClick={handleMainMenuClick} className=' col-span-2 flex items-center justify-center gap-x-2 pt-4'>
                <RiMenu2Fill color='white' size='24px'/>
                <p className='text-sm text-white'>Menu</p>
              </div>
            <div className=' col-span-3 flex items-end justify-start pr'>
              <Image className='h-5/6 object-scale-down' alt='/spacetime' src={SpaceTimeLogo} width={150} height={30}/>
  
            </div>
            <div className=' col-span-2 flex items-center justify-center relative pt-4'>
              <div className='flex flex-row gap-x-2 items-end'>
                <Link href={'/user/login'}>
                  <RiUser3Fill color='white' size='22px' />
                </Link>
                <Link href={'user/cart'}>
                  <BiCartAlt color='white' size='20px'/>
                </Link>
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

        {mainMenuOpen &&
          <div className='h-full w-full grid  px-3'>
            {categories.map((category, index) => {
              return (
                <MenuCategory category={category} subCategoriesArray={subCategoriesArray[index]} key={index.toString()}/>
                
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