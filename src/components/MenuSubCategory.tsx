import {BiPlus, BiMinus} from 'react-icons/bi'
import {useState, useEffect} from 'react'
import {getCatShort, reverseCatLookup, reverseSubCatLookup} from '../../utils/utils'
import Link from 'next/link'

interface MenuSubCategoryProps {
    subCategory: string
    subCategoriesArray: string[]
    category: string
}

const MenuSubCategory = ({subCategory, subCategoriesArray, category}: MenuSubCategoryProps) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const openMenuHandler = () => {
        setMenuOpen(!menuOpen)
    }

    


        return  (
            <div className='h-auto w-full'>
                <div className=' h-11 items-center pl-2 grid grid-cols-3 bg-mira-socialbg-grey border-t-2 '>
                <Link href={`/category/${reverseCatLookup(category)}/subCategory/${reverseSubCatLookup(subCategory)}`} className='col-span-2 flex flex-row items-center' >
                    <p className='text-mira-offwhite col-span-2'>{subCategory}</p>
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
                {/* {subCategoriesArray && subCategoriesArray.length > 0 && menuOpen &&
                    subCategoriesArray.map(subCategory => {
                        return (
                            <div className=' h-11 items-center pl-2 grid grid-cols-3 border-t-2 bg-mira-socialbg-grey' >
                                <p className='text-mira-offwhite col-span-2'>{subCategory}</p>
                                <div className='flex col-span-1 justify-end items-center  px-5'>
    
                                </div>
                            </div>
    
                        )
                    })
    
                } */}
            </div>
        )
}


export default MenuSubCategory