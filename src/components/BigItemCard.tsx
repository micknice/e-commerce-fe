'use client'
import { useEffect, useState } from "react"
import {getProductsByCategory, getProductsBySubCategoryPaginated,} from '../api/ecommerceApi'
import {reverseReplacement,  imgUrlToFilePath, checkSubCat, getSubCatShort, getCatShort} from '../../utils/utils'
import Link from 'next/link'


interface BigItemProps {
  subCategory: string
  coverImgPath: string
  coverTitle: string
}
const BigItemCard = ({subCategory, coverImgPath, coverTitle}: BigItemProps) => {

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

  if (checkSubCat(subCategory)) {
    return (
      <Link href={`/category/${category}/subCategory/${subCategory}`}>
        <div className='col-span-1  flex flex-col gap-y-2 h-52 md:h-72'>
            {/* img div */}
            <div className=' h-44 md:h-60 w-full'>
                <img className=' h-full w-full object-cover md:object-contain' src={coverImgPath}/>
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
      <Link href={`/category/${subCategory}`}>
        <div className='col-span-1  flex flex-col gap-y-2 h-52 md:h-72'>
            {/* img div */}
            <div className=' h-44 md:h-60 w-full'>
                <img className=' h-full w-full object-cover md:object-contain' src={coverImgPath}/>
            </div>
            {/* TITLE DIV */}
            <div>
                <p className='text-mira-headtext text-xl font-bold tracking-tighter'>{coverTitle.toUpperCase()}</p>
            </div>
          </div>
      </Link>
    )
    

  }


}

export default BigItemCard