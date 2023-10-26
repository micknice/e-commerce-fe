import {BiSearch, BiCartAlt, BiPlus, BiMinus} from 'react-icons/bi'
import {useState, useEffect} from 'react'
import MenuSubCategory from './MenuSubCategory'

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
                <p className='text-mira-offwhite col-span-2'>{category}</p>
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
                        <MenuSubCategory category={subCategory} subCategoriesArray={[]} key={index.toString()}/>

                    )
                })

            }
        </div>
    )
}


export default MenuCategory