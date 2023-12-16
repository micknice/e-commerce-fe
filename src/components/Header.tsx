'use client'
import Image from 'next/image'
import {BiSearch, BiCartAlt} from 'react-icons/bi'
import {RiMenu2Fill, RiUser3Fill} from 'react-icons/ri'
import MikiFitLogo from '../../public/assets/MIKFIT.png'
import HeaderSlider from '@/components/HeaderSlider'
import {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import { useCurrentUser } from '@/api/auth/useCurrentUser'
import {getBasket, getProductByProductId} from "../api/ecommerceApi"
import { useCartContext } from '@/context/cartContext'
import { usePathname } from 'next/navigation'
import useMediaQuery  from '@mui/material/useMediaQuery'
import { Transition } from '@headlessui/react';
import {ReactSearchAutocomplete} from 'react-search-autocomplete'
import {productData} from '../../utils/productData'
import {useRouter} from 'next/navigation'
import {imgUrlToFilePath, replaceSpacesAndAmpersands} from '../../utils/utils'




import MenuCategory from './MenuCategory'
import MenuCategoryLarge from './MenuCategoryLarge'


const categories = ['Strength Equipment', 'Weights & Bars', 'Conditioning', 'Gym Storage', 'Accessories']

const strengthEquipmentCategories = ['Gym Machines & Attachments', 'Landmine Posts & Handles', 'Parallel Bars', 
'Power Cages & Racks', 'Power Rack Attachments', 'Pull Up Bars', 'Sit Up Benches & Bars', 'Squat Racks & Stands', 'Weight Benches', 'Weightlifting Equipment']

const weightsAndBarsCategories = ['Bars', 'Bumper Plates', 'Kettlebells', 'Medicine Balls', 'Sandbags', 
'Slam Balls', 'Weight Plates', 'Wearable Weights']

const conditioningCategories = ['Battle Ropes', 'Boxing Equipment', 'Cardio Equipment', 'Core Sliders', 'Exercise Mats', 
'Exercise Steps', 'Hula Hoops', 'Pilates & Yoga', 'Plyo Jump Boxes', 'Push Up Handles', 'Resistance Bands', 'Rollers', 'Skipping Ropes']

const gymStorageCategories = ['Bar Storage','Freestanding Gym Storage', 'Kettlebell Storage', 'Plate Storage',
'Rack Mounted Storage', 'Wall Mounted Storage']

const accessoriesCategories = ['Barbell Pads', 'Clothing & Apparel','Grip Training', 'Gym Floor Mats', 'Gym Flags',
'Gym Interval Timers', 'Lifting Straps, Wraps & Sleeves', 'Merchandise', 'Spares & Replacements', 'Tools', 'Weightlifting Belts']

const shopByRangeCategory = ['Calisthenics', 'Climbing', 'Commercial Gym Equipment', 'Olympic Weightlifting', 'Powerlifting', 'Strongman']

const offersCategories = ['Offers - Strength Equipment', 'Offers - Weights & Bars', 'Offers - Everything Else']

const subCategoriesArray = [strengthEquipmentCategories, weightsAndBarsCategories, conditioningCategories, gymStorageCategories, accessoriesCategories, [], shopByRangeCategory, offersCategories, []]

const Header = () => {

  const pathname = usePathname()
  const isMobile = useMediaQuery('(max-width: 1280px)') 
  const router = useRouter()

    const modPaths = '/checkout/cart' 
    const {cartContext, updateCartContext} = useCartContext()

    const currentUser = useCurrentUser()
    const [mainMenuOpen, setMainMenuOpen] = useState(false)
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState(0.00)
    console.log(cart, 'cart')

    const handleMainMenuClick = () => {
      setMainMenuOpen(!mainMenuOpen);
    }

    useEffect(() => {
      const fetchBasket = async() => {
        if (currentUser){
          console.log(currentUser)
          const basket = await getBasket(currentUser.jwt, currentUser.user.id)
          setCart(basket)
          let total = 0
          for (const item of basket) {
            const product = await getProductByProductId(item)

            total+= product.price
          }
          setCartTotal(total)
        }
      }
      fetchBasket()
    }, [cartContext, currentUser])

    const handleOnSearch = (string: string, results: any) => {
      console.log(results, 'results', string, 'string')
    }
    const handleOnHover = () => {

    }
    const handleOnSelect = (item: any) => {
      console.log(item, 'ITEM!!!!')
      const productStr = replaceSpacesAndAmpersands(item.name)
      router.push(`/product/${item.id}${productStr}`)

    }
    const handleOnFocus = () => {

    }

    const formatResult = (item:any) => {
      return (
        <>
          <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
          <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
        </>
      )
    }

    return (


    
        <div className='h-full '>
          <div className='h-full bg-mira-black relative z-10 '>
          {/* header */}
          {modPaths !== pathname &&
          <div className='h-[180px] xl:h-[100px] w-full grid grid-rows-2 xl:px-24 items-'>
            <div className='row-span-1 grid grid-cols-7 items-center'>
              {modPaths !== pathname && isMobile &&
                <div onClick={handleMainMenuClick} className=' col-span-2 flex items-center justify-center gap-x-2 pt-4'>
                  <RiMenu2Fill color='white' size='24px'/>
                  <p className='text-sm text-white'>Menu</p>
              </div>
              }
  
                <div className=' col-span-3 xl:col-span-2 flex items-end justify-center xl:justify-start xl:items-center xl:pt-4' >
                  <Link href={"/"}>
                      <Image className='h-5/6 object-scale-down' alt='/spacetime' src={MikiFitLogo} width={135} height={25}/>
          
                  </Link>
                </div>
                {modPaths !== pathname && !isMobile &&
                <div className='flex flex-col justify-center xl:items-center xl:col-span-3'>
                  {/* <div className=' bg-mira-offwhite h-12 w-[500px] grid grid-cols-8'> */}
                    
                    {/* <div className='col-span-7'> */}
                      {/* <ReactSearchAutocomplete
                        className=' w-full bg-mira-offwhite rounded-none font-bold flex items-center z-10'
                        items={productData}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        showIcon={true}
                        placeholder='SEARCH'
                        // formatResult={formatResult}
                        styling={{borderRadius:'0', backgroundColor:'#f4f4f4', placeholderColor:'#141414', boxShadow:'none', border:'none', clearIconMargin:'px 20px 0 0', height:'36px',  }}
                        
                        autoFocus={false}
  
                      /> */}
                    {/* </div> */}
                    {/* <div className='col-span-1 flex items-center justify-center gap-x-2'>
                      <BiSearch className='text-gray-900 text-[26px]'/>
                    </div> */}
                  {/* </div> */}
                </div>
              }
              {modPaths === pathname &&
  
              <div className='col-span-2'></div>
              }
              <div className=' col-span-2 xl:col-span-2 flex items-center justify-center xl:justify-end relative pt-4 '>
                <div className='flex flex-row gap-x-2 md:gap-x-6 items-center'>
                  <Link href={'/user/login'}>
                    <RiUser3Fill color='white' size='22px' />
                  </Link>
                  {modPaths !== pathname && isMobile &&
                    <Link href={'/checkout/cart'}>
                      <BiCartAlt color='white' size='20px'/>
                    </Link>
                  }
                  {modPaths !== pathname && !isMobile &&
                    <div className='bg-mira-orange h-12 w-36 flex flex-row items-center justify-start p-2'>
                      <Link href={'/checkout/cart'} className='flex flex-row gap-x-4 items-center '>
                        <BiCartAlt color='black' size='24px'/>
                        <p className='text-white tracking-wide text-md'>{`£ ${cartTotal.toFixed(2)}`}</p>
                      </Link>
                    </div>
                  }
                </div>
                {modPaths !== pathname && isMobile &&
                  <div className='h-5 w-5 rounded-full bg-mira-cart-red relative -top-3 -left-2 flex items-center justify-center'>
                    <p className='text-white text-sm'>{cart.length}</p>
                  </div>
                }
    
              </div>
            </div>
            {/* search bar div */}
            <div className='row-span-1 flex items-start justify-center pt-3'>
              {/* {modPaths !== pathname && isMobile &&
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
              } */}
  
            </div>
          </div>
          }
          {modPaths === pathname &&
          <div className='h-[100px] xl:h-[100px] w-full grid grid-rows-2 xl:py-4 py-4'>
            <div className='row-span-1 grid grid-cols-7'>
              {modPaths !== pathname && isMobile &&
                <div onClick={handleMainMenuClick} className=' col-span-2 flex items-center justify-center gap-x-2 pt-4'>
                  <RiMenu2Fill color='white' size='24px'/>
                  <p className='text-sm text-white'>Menu</p>
                </div>
              }
  
                <div className=' col-span-3 flex items-end justify-center pr' >
                  <Link href={"/"}>
                      <Image className='h-5/6 object-scale-down' alt='/spacetime' src={MikiFitLogo} width={135} height={25}/>
          
                  </Link>
                </div>
                {modPaths !== pathname && !isMobile &&
                <div className='flex flex-col justify-center'>
                  <div className=' bg-mira-offwhite rounded-full h-10 w-74 grid grid-cols-8 px-4'>
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
              }
              {modPaths === pathname &&
  
              <div className='col-span-2'></div>
              }
              <div className=' col-span-2 flex items-center justify-center relative pt-4'>
                <div className='flex flex-row gap-x-2 items-end'>
                  <Link href={'/user/login'}>
                    <RiUser3Fill color='white' size='22px' />
                  </Link>
                  {modPaths !== pathname &&
  
                    <Link href={'/checkout/cart'}>
                      <BiCartAlt color='white' size='20px'/>
                    </Link>
                  }
                </div>
                {modPaths !== pathname &&
  
                  <div className='h-5 w-5 rounded-full bg-mira-cart-red relative -top-3 -left-2 flex items-center justify-center'>
                    <p className='text-white text-sm'>{cart.length}</p>
                  </div>
                }
    
              </div>
            </div>
            {/* search bar div */}
            {/* <div className='row-span-1 flex items-start justify-center pt-3'>
              {modPaths !== pathname && isMobile &&
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
              }
  
            </div> */}
          </div>
          }
  
          {/* {mainMenuOpen && */}
  
          <div className='h-full w-full grid px-3'>
          {categories.map((category, index) => {
            const enter = `transition-transform transform ease-in-out duration-[${100*index}ms] delay-[${100*index}ms]`
            const enterFrom = `transform -translate-y-10 opacity-0`
            
            
            return (
              <Transition
              key={index.toString()}
              show={mainMenuOpen}
              enter={enter}
              enterFrom={enterFrom}
              enterTo='transform translate-y-0 opacity-100'
              leave='transition-transform transform ease-in duration-200'
              leaveFrom='transform translate-y-0 opacity-100'
              leaveTo='transform -translate-y-2 opacity-0'
            >
              {(ref) => (
                <div ref={ref}>
                  <MenuCategory
                    category={category}
                    subCategoriesArray={subCategoriesArray[index]}
                    handleMenuClickCallback={handleMainMenuClick}
                    mainMenuOpen={mainMenuOpen}
                  />
                </div>
              )}
            </Transition>)
          })}
        </div>
        {modPaths !== pathname && !isMobile &&
          <div className='w-full h-12  px-20'>
            <div className='w-5/6 h-full '>
              <div className='absolute h-full w-full flex flex-row px-3 z-40'>
                {categories.map((category, index) => {
                  return (
                    <div className='w-70 h-full z-40' key={`mcl${index}`}>
                      <MenuCategoryLarge
                        category={category}
                        subCategoriesArray={subCategoriesArray[index]}
                        handleMenuClickCallback={handleMainMenuClick}
                        mainMenuOpen={mainMenuOpen}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        }
          {/* info slider */}
          <HeaderSlider/>
        </div>
        <div className=' w-full flex items-center justify-center'>
          <div className='absolute top-24 xl:top-6 h-auto w-auto z-20 bg-white'>
            {modPaths !== pathname && !isMobile &&
            <div className='flex flex-col justify-center xl:items-center xl:col-span-3'>
                <div className=' bg-mira-offwhite h-12 w-[500px] grid grid-cols-8'>
                  
                  <div className='col-span-7 flex items-center'>
                    <ReactSearchAutocomplete
                      className=' w-full bg-mira-offwhite rounded-none font-bold flex flex-col items-center z-10'
                      items={productData}
                      onSearch={handleOnSearch}
                      onHover={handleOnHover}
                      onSelect={handleOnSelect}
                      onFocus={handleOnFocus}
                      showIcon={false}
                      placeholder='SEARCH'
                      showItemsOnFocus={true}
                      maxResults={10}
                      // formatResult={formatResult}
                      styling={{borderRadius:'0', backgroundColor:'#f4f4f4', placeholderColor:'#141414', boxShadow:'none', border:'none', clearIconMargin:'px 20px 20 20', height:'30px', searchIconMargin: '0 0 0 16px' }}
                      
                      autoFocus={false}
  
                    />
                  </div>
                  <div className='col-span-1 flex items-center justify-center gap-x-2'>
                    <BiSearch className='text-gray-900 text-[26px]'/>
                  </div>
                </div>
              </div>
              }
            {modPaths !== pathname && isMobile &&
            <div className='flex flex-col justify-center xl:items-center xl:col-span-3'>
                <div className=' bg-mira-offwhite h-12 w-[300px] grid grid-cols-8 rounded-full'>
                  <div className='col-span-7 flex items-center'>
                    <ReactSearchAutocomplete
                      className=' w-full  rounded-full font-bold flex flex-col items-center z-10'
                      items={productData}
                      onSearch={handleOnSearch}
                      onHover={handleOnHover}
                      onSelect={handleOnSelect}
                      onFocus={handleOnFocus}
                      showIcon={false}
                      placeholder='SEARCH'
                      showItemsOnFocus={true}
                      maxResults={10}
                      // formatResult={formatResult}
                      styling={{borderRadius:'40', backgroundColor:'#f4f4f4', placeholderColor:'#141414', boxShadow:'none', border:'none', clearIconMargin:'px 20px 20 20', height:'30px', searchIconMargin: '0 0 0 16px' }}
                      
                      autoFocus={false}
  
                    />
                  </div>
                  <div className='col-span-1 flex items-center justify-center gap-x-2' onClick={handleOnSelect}>
                    <BiSearch className='text-gray-900 text-[26px]'/>
                  </div>
                </div>
              </div>
              }
            
          </div>
        </div>
      </div>
    )
}

export default Header