'use client'
import { useEffect, useState } from "react"
import {getAllProducts, getProductsByCategory, getProductsBySubCategory, getProductByProductId} from '../api/ecommerceApi'
import {allSubCatArr, categories} from '../../categories'
import {reverseReplacement, replaceSpacesAndAmpersands, extractTextBetweenSuffixAndLastSlash, imgUrlToFilePath, checkSubCat, getSubCatShort, getCatShort} from '../../utils/utils'
import { useAmp } from "next/amp"
import subCatLookUp from '../../utils/subCatLookup'
import subCatShortened from '../../utils/subCatShortened'



interface BigProductProps {
  product: any
}
const BigProductCard = ({product}: BigProductProps) => {

  const [prod, setProd] = useState('')
  const [title, setTitle] = useState('')
  const [imgPath, setImgPath] = useState('https://images.pexels.com/photos/7534178/pexels-photo-7534178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

  useEffect(() => {
    console.log('effect')
    if (product.id) {
      setImgPath(`/mirafit-images/${product.id -1}-${imgUrlToFilePath(product.img)}`)
      // setProd(reverseReplacement(prodActual[0].sub_category.toUpperCase()))
      setTitle(product.name)
      
      
    }
  }, [product])


    return (
        <div className='col-span-1  grid grid-rows-5 gap-y-2 h-full py-4 hover:shadow-lg group '>
            {/* img div */}
            <div className=' h-44 w-full row-span-3 group-hover:scale-105'>
                <img className=' h-full w-full object-cover' src={imgPath}/>
            </div>
            {/* TITLE DIV */}
            <div className="row-span-2 grid grid-rows-5">
              <div className="flex flex-col row-span-2">
                  <p className='text-mira-headtext text-sm  tracking-tighter text-center group-hover:scale-105 group-hover:tracking-tight group-hover:font-semibold hover:text-mira-orange'>{product.name}</p>
              </div>
              <div className="flex flex-col row-span-1 justify-end ">
                  <p className='text-sm  tracking-tighter text-center text-mira-orange group-hover:scale-105 group-hover:font-semibold'>{`£${product.price}`}</p>
              </div>
              <div className="flex items-end justify-center w-full row-span-2">
                {product.inventory.quantity > 0 &&
                  <div className="flex items-center justify-center bg-mira-orange hover:bg-mira-black h-10 w-2/3 group-hover:scale-105">
                      <p className="text-white text-sm font-bold ">ADD TO CART</p>
                  </div>
                }
                {product.inventory.quantity === 0 &&
                  <div className="flex items-center justify-center h-10 w-2/3 ">
                      <p className="text-mira-grey text-sm font-medium group-hover:scale-105 group-hover:font-semibold">Out of stock</p>
                  </div>
                }
              </div>
            </div>
          </div>
    )
}

export default BigProductCard