import {BiSearch, BiCartAlt, BiPlus, BiMinus} from 'react-icons/bi'
import {useState, useEffect} from 'react'

interface MenuCategoryProps {
    category: string
    subCategoriesArray: string[]
}

const MenuSubCategory = ({category, subCategoriesArray}: MenuCategoryProps) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const openMenuHandler = () => {
        setMenuOpen(!menuOpen)
    }


        return  (
            <div className='h-auto w-full'>
                <div className=' h-11 items-center pl-2 grid grid-cols-3 bg-mira-socialbg-grey border-t-2 '>
                    <p className='text-mira-offwhite col-span-2'>{category}</p>
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