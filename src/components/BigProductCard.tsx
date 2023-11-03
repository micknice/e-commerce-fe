'use client'
import { useEffect, useState } from "react"
import {getAllProducts, getProductsByCategory, getProductsBySubCategory,} from '../api/ecommerceApi'
import {allSubCatArr, categories} from '../../categories'
import {reverseReplacement, replaceSpacesAndAmpersands, extractTextBetweenSuffixAndLastSlash, imgUrlToFilePath, checkSubCat, getSubCatShort, getCatShort} from '../../utils/utils'
import { useAmp } from "next/amp"
import subCatLookUp from '../../utils/subCatLookup'
import subCatShortened from '../../utils/subCatShortened'


interface BigProductProps {
  product: string
}
const BigProductCard = ({product}: BigProductProps) => {

  const [prod, setProd] = useState('')
  const [title, setTitle] = useState('')
  const [imgPath, setImgPath] = useState('https://images.pexels.com/photos/7534178/pexels-photo-7534178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

  useEffect(() => {
    console.log('effect')
    if (product) {

      const fetchSubCat = async() => {
        if (checkSubCat(product)) {
          const prodActual = await getProductsBySubCategory(product);
         setProd(reverseReplacement(prodActual[0].sub_category.toUpperCase()))
          setImgPath(`/mirafit-images/${prodActual[0].id -1}-${imgUrlToFilePath(prodActual[0].img)}`)
          setTitle(getSubCatShort(product))
        } else {
          const prodActual = await getProductsByCategory(product);
         setProd(reverseReplacement(prodActual[0].category.toUpperCase()))
          setImgPath(`/mirafit-images/${prodActual[0].id -1}-${imgUrlToFilePath(prodActual[0].img)}`)
          setTitle(getCatShort(product))

        }
      }
      fetchSubCat()
    }
  }, [])


    return (
        <div className='col-span-1  flex flex-col gap-y-2 h-52'>
            {/* img div */}
            <div className=' h-44 w-full'>
                <img className=' h-full w-full object-cover' src={imgPath}/>
            </div>
            {/* TITLE DIV */}
            <div>
              
                <p className='text-mira-headtext text-xl font-bold tracking-tighter'>{title}</p>
            </div>
          </div>
    )
}

export default BigProductCard