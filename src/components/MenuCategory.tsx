import {BiPlus, BiMinus} from 'react-icons/bi'
import {useState} from 'react'
import MenuSubCategory from './MenuSubCategory'
import Link from 'next/link'
import {reverseCatLookup} from '../../utils/utils'
import { Transition } from '@headlessui/react';

interface MenuCategoryProps {
    category: string
    subCategoriesArray: string[]
    handleMenuClickCallback: Function
    mainMenuOpen: boolean
}

const MenuCategory = ({category, subCategoriesArray, handleMenuClickCallback, mainMenuOpen}: MenuCategoryProps) => {

    const [categoryMenuOpen, setCategoryMenuOpen] = useState(false)

    const openCategoryHandler = () => {
        setCategoryMenuOpen(!categoryMenuOpen)
        
        console.log(subCategoriesArray)
    }

    
    return (
        <Transition 
                show={mainMenuOpen} 
                enter='transition-transform transform ease-in-out duration-300' 
                enterFrom="transform -translate-y-2 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="transition-transform transform ease-in duration-200"
                leaveFrom="transform translate-y-0 opacity-100"
                leaveTo="transform -translate-y-2 opacity-0">

        <div className='h-auto w-full transition ease-in-out duration-300'>
            <div className=' h-11 items-center pl-2 grid grid-cols-3 border-t-2 transition '>
                <Link href={`/category/${reverseCatLookup(category)}`} className='col-span-2 flex flex-row items-center' onClick={() => {handleMenuClickCallback()}} >
                    <p className='text-mira-offwhite col-span-2'>{category}</p>
                </Link>
                <div className='flex col-span-1 justify-end items-center  px-5'>
    
                {subCategoriesArray && subCategoriesArray.length > 0 && !categoryMenuOpen &&
                    <BiPlus onClick={openCategoryHandler} color='white' size='20px'/>
                }
                {subCategoriesArray && subCategoriesArray.length > 0 && categoryMenuOpen &&
                    <BiMinus onClick={openCategoryHandler} color='white' size='20px'/>
                }
                </div>
            </div>
            {
                subCategoriesArray.map((subCategory, index) => {
                    const enterFrom = `transform -translate-y-10 opacity-0`
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

                            <MenuSubCategory category={category} subCategory={subCategory} subCategoriesArray={[]} handleMenuClickCallback={handleMenuClickCallback} key={index.toString()}/>
                        </Transition>

                    )
                })

            }
        </div>
        </Transition>

    )
}


export default MenuCategory