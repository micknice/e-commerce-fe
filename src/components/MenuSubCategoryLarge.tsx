import {BiPlus, BiMinus} from 'react-icons/bi'
import {useState} from 'react'
import {reverseCatLookup, reverseSubCatLookup} from '../../utils/utils'
import Link from 'next/link'

interface MenuSubCategoryProps {
    subCategory: string
    subCategoriesArray: string[]
    category: string
    handleMenuClickCallback: Function
}

const MenuSubCategoryLarge = ({subCategory, subCategoriesArray, category, handleMenuClickCallback}: MenuSubCategoryProps) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const openMenuHandler = () => {
        setMenuOpen(!menuOpen)
    }

        return  (
            <div className='h-auto w-auto z-40 bg-white'>
                <div className='h-11 w-full items-center pl-2 grid grid-cols-3 bg-white bg-opacity-100 border-t-2 -500 z-40'>
                <Link href={`/category/${reverseCatLookup(category)}/subCategory/${reverseSubCatLookup(subCategory)}`} className='col-span-2 flex flex-row items-center' >
                    <p className='text-mira-black col-span-2 font-bold text-sm'>{subCategory.toUpperCase()}</p>
                </Link>
                    <div className='flex col-span-1 justify-end items-center  px-5'>
                    {subCategoriesArray && subCategoriesArray.length > 0 && !menuOpen &&
                        <BiPlus onClick={openMenuHandler} color='white' size='20px'/>
                    }
                    {subCategoriesArray && subCategoriesArray.length > 0 && menuOpen &&
                        <BiMinus onClick={openMenuHandler} color='white' size='20px'/>
                    }
                    </div>
                </div>
                
            </div>
        )
}


export default MenuSubCategoryLarge