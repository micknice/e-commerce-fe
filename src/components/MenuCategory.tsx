import {BiPlus, BiMinus} from 'react-icons/bi'
import {useState} from 'react'
import MenuSubCategory from './MenuSubCategory'
import Link from 'next/link'
import {getCatShort, reverseCatLookup} from '../../utils/utils'

interface MenuCategoryProps {
    category: string
    subCategoriesArray: string[]
}

const MenuCategory = ({category, subCategoriesArray}: MenuCategoryProps) => {

    const [categoryMenuOpen, setCategoryMenuOpen] = useState(false)

    const openCategoryHandler = () => {
        setCategoryMenuOpen(!categoryMenuOpen)
        console.log(subCategoriesArray)
    }

    
    return (
        <div className='h-auto w-full'>
            <div className=' h-11 items-center pl-2 grid grid-cols-3 border-t-2 '>
                <Link href={`/category/${reverseCatLookup(category)}`} className='col-span-2 flex flex-row items-center' >
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
            {subCategoriesArray && subCategoriesArray.length > 0 && categoryMenuOpen &&
                subCategoriesArray.map((subCategory, index) => {
                    return (
                        <MenuSubCategory category={category} subCategory={subCategory} subCategoriesArray={[]} key={index.toString()}/>

                    )
                })

            }
        </div>
    )
}


export default MenuCategory