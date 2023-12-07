'use client'
import {getCatShort, getSubCatShort} from '../../utils/utils'
import {BiChevronRight, BiChevronDown, BiChevronLeft} from 'react-icons/bi'
import {getProductsByCategoryPaginated, getProductsBySubCategoryPaginated} from '../api/ecommerceApi'
import { useEffect, useState } from 'react'
import BigProductCard from './BigProductCard'
import Link from 'next/link'
import {ImArrowUp, ImArrowDown} from 'react-icons/im'

interface ProductCategoryProps {
    category: string
    subCategory?: string
}


const ProductCategory = ({category, subCategory}: ProductCategoryProps) => {

    const [productArr, setProductArr] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(12)
    const [paginationIndex, setPaginationIndex] = useState(0)
    const [sortBy, setSortBy] = useState('POPULAR')
    const [sortByQuery, setSortByQuery] = useState('id')
    const [openSort, setOpenSort] = useState(false)
    const [orderAsc, setOrderAsc] = useState(true)
    const [order, setOrder] = useState('asc')
    const [pages, setPages] = useState([1, 2, 3, 4, 5])
    const [productCount, setProductCount] = useState(0)
    

    useEffect(() => {
        const fetchProducts = async() => {
            if (!subCategory) {
                const {products, productCount} = await getProductsByCategoryPaginated(category, paginationIndex, itemsPerPage, sortByQuery, order)
                const calculatedPageCount = Math.ceil(productCount / itemsPerPage)
                const newPages = []
                for(let i = 1; i < calculatedPageCount+1 ; i++) {
                    newPages.push(i)
                }
                setPages(newPages)
                setProductArr(products)
                
            } else {
                const {products, productCount} = await getProductsBySubCategoryPaginated(subCategory, paginationIndex, itemsPerPage, sortByQuery, order)
                const calculatedPageCount = Math.ceil(productCount / itemsPerPage)
                setProductArr(products)
                const newPages = []
                for(let i = 1; i < calculatedPageCount+1; i++) {
                    newPages.push(i)
                }
                setPages(newPages)
                setProductArr(products)
            }
        }
        fetchProducts()

    }, [category, paginationIndex, order, sortByQuery])


    const handlePaginationSelect = (index: number) => {
        setPaginationIndex(index-1)
    }

    const handlePaginationIncrement = (increment: number) => {
        setPaginationIndex(paginationIndex + increment)
        
    }

    const handleSwitchOrderAsc = () => {
        if(orderAsc){
            setOrder('desc')
        } else {
            setOrder('asc')
        }
        setOrderAsc(!orderAsc)
    }

    const handleOpenSort = () => {
        setOpenSort(!openSort)
    }

    const handleSortSelection = (sortStr: string) => {
        setSortBy(sortStr)
        setOpenSort(!openSort)
        if (sortStr === 'POPULAR') {
            setSortByQuery('id')
        } else {
            setSortByQuery(sortStr.toLowerCase())
        }
    }
    
    return (
        <div>
            {/* nav tab */}
            <div className='flex flex-row items-center px-4 py-4'>
                <Link href={'/'}>
                    <div className='group'>
                        <p className='text-xs text-mira-grey group-hover:text-mira-orange'>Home</p>
                    </div>
                </Link>
                <div>
                    <BiChevronRight color='#c3c3c4'/>
                </div>
                <Link href={'/'}>
                    <div className='group'>
                        <p className='text-xs text-mira-grey group-hover:text-mira-orange'>{getCatShort(category, false)}</p>
                    </div>
                </Link>
                {subCategory &&
                    <div>
                        <BiChevronRight color='#c3c3c4'/>
                    </div>
                }
                {subCategory &&
                    <Link href={'/'}>
                        <div className='group'>
                            <p className='text-xs text-mira-grey group-hover:text-mira-orange'>{getSubCatShort(subCategory, false)}</p>
                        </div>
                    </Link>
                }
            </div>
            <div className="grid grid-cols-1  px-4">
                <div className="flex flex-col">
                    <div className="h-10 flex justify-center items-center">
                        {category && !subCategory &&
                            <p className="text-2xl text-mira-black font-bold tracking-tighter">{getCatShort(category)}</p>
                        }
                        {subCategory &&
                            <p className="text-2xl text-mira-black font-bold tracking-tighter">{getSubCatShort(subCategory)}</p>
                        }
                    </div>
                    <div className='h-4'/>
                    <div className='w-full flex flex-row items-center'>
                        {category && !subCategory &&
                            <p className="text-xs text-mira-black font-bold tracking-widest">{`CATEGORIES: ${getCatShort(category)}`}</p>
                        }
                        {subCategory &&
                            <p className="text-xs text-mira-black font-bold tracking-widest">{`CATEGORIES: ${getSubCatShort(subCategory)}`}</p>

                        }
                        <div className='w-auto items-center justify-end'>
                            <BiChevronDown />
                        </div>
                    </div>
                    <div className="h-3"/>
                </div>

                <div className='flex flex-col gap-y-4 py-4'>
                    <div className='w-full flex justify-center '>
                        <div className='flex flex-row  w-full justify-center items-center gap-x-2'>
                            <p className='text-[12px] font-light tracking-widest'>SORT BY</p>
                            <div className='flex flex-col justify-center items-center w-1/4 relative'>
                                <div className='border-[1px]  h-8 flex flex-row items-center justify-end gap-x-3' onClick={handleOpenSort}>
                                    <p className='text-[12px] font-light tracking-widest pl-2'>{sortBy}</p>
                                    <BiChevronDown color='#888888'/>
                                </div>
                                {openSort &&
                                <div className='bg-white border-[1px] flex flex-col z-10 w-full absolute top-8'>
                                    {sortBy === 'POPULAR' &&
                                    <p className='bg-sort-selection-blue text-[12px] font-light tracking-widest pl-2' onClick={()=>{handleSortSelection('POPULAR')}}>POPULAR</p>
                                    }
                                    {sortBy !== 'POPULAR' &&
                                    <p className=' text-[12px] font-light tracking-widest pl-2' onClick={()=>{handleSortSelection('POPULAR')}}>POPULAR</p>
                                    }
                                    {sortBy === 'NAME' &&
                                    <p className='bg-sort-selection-blue text-[12px] font-light tracking-widest pl-2' onClick={()=>{handleSortSelection('NAME')}}>NAME</p>
                                    }
                                    {sortBy !== 'NAME' &&
                                    <p className='text-[12px] font-light tracking-widest pl-2' onClick={()=>{handleSortSelection('NAME')}}>NAME</p>
                                    }
                                    {sortBy === 'PRICE' &&
                                    <p className='bg-sort-selection-blue text-[12px] font-light tracking-widest pl-2' onClick={()=>{handleSortSelection('PRICE')}}>PRICE</p>
                                    }
                                    {sortBy !== 'PRICE' &&
                                    <p className='text-[12px] font-light tracking-widest pl-2' onClick={()=>{handleSortSelection('PRICE')}}>PRICE</p>
                                    }
                                </div>
                                }
                            </div>
                            <div className='h-8 w-8 bg-page-button-grey flex items-center justify-center hover:bg-mira-orange' onClick={handleSwitchOrderAsc}>
                                {orderAsc &&
                                <ImArrowUp color='#555555'/>
                                }
                                {!orderAsc &&
                                <ImArrowDown color='#555555'/>
                                }
                            </div>
                    </div>
                    </div>
                    <div className='w-full flex justify-center '>
                        <div className='flex flex-row  w-full justify-center items-center gap-x-[3px]'>
                            <p className='text-[12px] font-light tracking-widest pr-2'>PAGE</p>
                            {paginationIndex > 0 &&
                                <div className='h-8 w-8 bg-page-button-grey flex items-center justify-center hover:bg-mira-orange hover:animate-pulse hover:text-white' onClick={()=>{handlePaginationIncrement(-1)}}>
                                    <BiChevronLeft />
                                </div>
                            }
                            {pages.map((page, index) => {
                                return page === paginationIndex +1 ?
                                    <div className='h-8 w-8 bg-page-button-darkgrey flex items-center justify-center scale-105' key={`pag${index}`}>
                                        <p className='text-[12px] font-light'>{page}</p>
                                    </div>
                                    :
                                    <div className='h-8 w-8 bg-page-button-grey flex items-center justify-center hover:bg-mira-orange hover:text-white' key={`pag${index}`} onClick={()=> {handlePaginationSelect(page)}}>
                                        <p className='text-[12px] font-light'>{page}</p>
                                    </div>
                                })
                            }
                            {paginationIndex < pages.length &&
                                <div className='h-8 w-8 bg-page-button-grey flex items-center justify-center hover:bg-mira-orange hover:animate-pulse hover:text-white' onClick={()=>{handlePaginationIncrement(1)}}>
                                    <BiChevronRight />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                
                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                        {productArr.map((product, index) => {
                                return(
                                    <div className='h-[45vh] w-full flex flex-col gap-y-4  ' key={`/prod${index}`}>
                                        <div className='h-[1px] bg-mira-grey '/>
                                        <div className='h-full w-full '><BigProductCard product={product} /></div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='flex flex-col gap-y-4 py-4'>
                    
                    <div className='w-full flex justify-center '>
                        <div className='flex flex-row  w-full justify-center items-center gap-x-[3px]'>
                            <p className='text-[12px] font-light tracking-widest pr-2'>PAGE</p>
                            {paginationIndex > 0 &&
                                <div className='h-8 w-8 bg-page-button-grey flex items-center justify-center hover:bg-mira-orange hover:animate-pulse hover:text-white' onClick={()=>{handlePaginationIncrement(-1)}}>
                                    <BiChevronLeft />
                                </div>
                            }
                            {pages.map((page, index) => {
                                return page === paginationIndex +1 ?
                                    <div className='h-8 w-8 bg-page-button-darkgrey flex items-center justify-center scale-105' key={`page${index}`}>
                                        <p className='text-[12px] font-light'>{page}</p>
                                    </div>
                                    :
                                    <div className='h-8 w-8 bg-page-button-grey flex items-center justify-center hover:bg-mira-orange hover:text-white' key={`page${index}`} onClick={()=> {handlePaginationSelect(page)}}>
                                        <p className='text-[12px] font-light'>{page}</p>
                                    </div>
                                })
                            }
                            {paginationIndex < pages.length &&
                                <div className='h-8 w-8 bg-page-button-grey flex items-center justify-center hover:bg-mira-orange hover:animate-pulse hover:text-white' onClick={()=>{handlePaginationIncrement(1)}}>
                                    <BiChevronRight />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductCategory