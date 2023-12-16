import {BiPlus, BiMinus} from 'react-icons/bi'
import { IoChevronDown } from "react-icons/io5"
import {useState} from 'react'
import MenuSubCategoryLarge from './MenuSubCategoryLarge'
import Link from 'next/link'
import {reverseCatLookup} from '../../utils/utils'
import { Transition } from '@headlessui/react';

interface MenuCategoryProps {
    category: string
    subCategoriesArray: string[]
    handleMenuClickCallback: Function
    mainMenuOpen: boolean
}

const MenuCategoryLarge = ({category, subCategoriesArray, handleMenuClickCallback, mainMenuOpen}: MenuCategoryProps) => {

    const [categoryMenuOpen, setCategoryMenuOpen] = useState(false)

    const openCategoryHandler = () => {
        setCategoryMenuOpen(!categoryMenuOpen)
        
        console.log(subCategoriesArray)
    }

    
    return (
        <div className='h-auto w-auto transition ease-in-out duration-300 z-30 ' onMouseEnter={openCategoryHandler} onMouseLeave={openCategoryHandler}>
            <div className=' h-11 items-center pl-2 grid grid-cols-3  transition z-30'>
                <Link href={`/category/${reverseCatLookup(category)}`} className='col-span-2 flex flex-row items-center'  >
                    <p className='text-mira-offwhite col-span-2 font-bold'>{category.toUpperCase()}</p>
                </Link>
                <div className='flex col-span-1 justify-end items-center  px-5'>
    
                {subCategoriesArray && subCategoriesArray.length > 0 && 
                    <IoChevronDown onClick={openCategoryHandler} color='white' size='20px'/>
                }
                </div>
            </div>
                {subCategoriesArray.map((subCategory, index) => {
                    const enterFrom = `transform -translate-y-10 opacity-0 z-50`
                    return (
                        <Transition
                            key={`id${index}`}
                            show={subCategoriesArray && subCategoriesArray.length > 0 && categoryMenuOpen} 
                            enter='transition-transform transform ease-in-out duration-300 ' 
                            enterFrom={enterFrom}
                            enterTo="transform translate-y-0 opacity-100"
                            leave="transition-transform transform ease-in-out duration-75"
                            leaveFrom="transform translate-y-0 opacity-100"
                            leaveTo="transform -translate-y-2 opacity-0">
                            <MenuSubCategoryLarge category={category} subCategory={subCategory} subCategoriesArray={[]} handleMenuClickCallback={handleMenuClickCallback} key={index.toString()}/>
                        </Transition>
                    )
                })}
        </div>

    )
}


export default MenuCategoryLarge