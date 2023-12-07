'use client'
import { useEffect, useState } from "react"
import {getProductsByCategory, getProductsBySubCategoryPaginated,} from '../api/ecommerceApi'
import {reverseReplacement,  imgUrlToFilePath, checkSubCat, getSubCatShort, getCatShort} from '../../utils/utils'
import Link from 'next/link'
import { CircularProgress } from '@mui/material';


interface BigItemProps {
  subCategory: string
  coverImgPath: string
  coverTitle: string
}
const BigItemCard = ({subCategory, coverImgPath, coverTitle}: BigItemProps) => {
  // console.log(subCategory, 'subcat')

  const [subCat, setSubCat] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    if (subCategory) {
      const fetchSubCat = async() => {
        if (checkSubCat(subCategory)) {
          const {products} = await getProductsBySubCategoryPaginated(subCategory, 0, 1, 'id', 'asc');
          // const subCatActual = await getProductsBySubCategoryPaginated(subCategory, 0, 1, 'id', 'asc');
          const subCatActual = products
          setSubCat(reverseReplacement(subCatActual[0].sub_category.toUpperCase()))
          setCategory(subCatActual[0].category)
        } else {
          const {products} = await getProductsByCategory(subCategory);
          // const subCatActual = await getProductsByCategory(subCategory);
          const subCatActual = products;
          setSubCat(reverseReplacement(subCatActual[0].category.toUpperCase()))
        }
      }
      fetchSubCat()
    }
  }, [])

  if (checkSubCat(subCategory) && category) {
    // console.log(subCategory, 'subcat')
    return (
      <Link href={`/category/${category}/subCategory/${subCategory}`}>
        <div className='col-span-1  flex flex-col gap-y-2 h-52 md:h-72'>
            {/* img div */}
            <div className='h-44 md:h-60 w-full relative'>
              <img
                className="h-full w-full absolute inset-0 object-fill opacity-10 z-10 "
                src={"/assets/Vignette-Transparent.png"}
                alt="Vignette"
              />
              <img
                className='h-full w-full absolute inset-0 object-cover md:object-contain z-0 '
                src={coverImgPath}
                alt="Cover Image"
              />
            </div>
            {/* TITLE DIV */}
            <div>
              
                <p className='text-mira-headtext text-xl font-bold tracking-tighter'>{coverTitle.toUpperCase()}</p>
            </div>
          </div>
      </Link>
    )
  } else if (subCat){
    
    console.log(subCategory, 'cat')
    return (
      
      <Link href={`/category/${subCategory}`}>
        <div className='col-span-1  flex flex-col gap-y-2 h-52 md:h-72'>
            {/* img div */}
            <div className='h-44 md:h-60 w-full relative'>
              <img
                className="h-full w-full absolute inset-0 object-fill opacity-10 z-10"
                src={"/assets/Vignette-Transparent.png"}
                alt="Vignette"
              />
              <img
                className='h-full w-full absolute inset-0 object-cover md:object-contain z-0'
                src={coverImgPath}
                alt="Cover Image"
              />
            </div>
            {/* TITLE DIV */}
            <div>
                <p className='text-mira-headtext text-xl font-bold tracking-tighter'>{coverTitle.toUpperCase()}</p>
            </div>
          </div>
      </Link>
    )
    

  } else {
    return (
      <div className="flex flex-col justify-center items-center"><CircularProgress /></div>
    )
  }


}

export default BigItemCard