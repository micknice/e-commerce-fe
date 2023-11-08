'use client'
import { useEffect, useState } from "react"
import {imgUrlToFilePath, extractTextBetweenSuffixAndLastSlash} from '../../utils/utils'
import Link from 'next/link'

interface BigProductProps {
  product: any
}
const BigProductCard = ({product}: BigProductProps) => {

  const [prod, setProd] = useState('')
  const [title, setTitle] = useState('')
  const [imgPath, setImgPath] = useState('https://images.pexels.com/photos/7534178/pexels-photo-7534178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  const [productLinkPath, setProductLinkPath] = useState('/category')
  useEffect(() => {
    console.log('effect')
    if (product.id) {
      const imgStr = `${product.id -1}-${imgUrlToFilePath(product.img)}`
      setImgPath(`/mirafit-images/${imgStr}`)
      setTitle(product.name)
      const productStr = imgUrlToFilePath(product.img).slice(0, imgStr.length -4)
      setProductLinkPath(`/product/${product.id}${productStr}`)
    }
  }, [product])

    return (
        <div className='col-span-1  grid grid-rows-5 gap-y-2 h-[45vh] py-4 hover:shadow-lg group' >
            {/* img div */}
            <Link href={productLinkPath} className=' h-44 w-full row-span-3 group-hover:scale-105 ' >
              <div className=' h-44 w-full row-span-3 group-hover:scale-105 '>
                <img className=' h-full w-full object-cover' src={imgPath} />
              </div>
            </Link>
            {/* TITLE DIV */}
            <div className="row-span-2 grid grid-rows-5">
              <Link href={productLinkPath} className="flex flex-col row-span-2 ">
                <div className="flex flex-col row-span-2 ">
                    <p className='text-mira-headtext text-sm  tracking-tighter text-center group-hover:scale-105 group-hover:tracking-tight group-hover:font-semibold hover:text-mira-orange'>{product.name}</p>
                </div>
              </Link>
              <Link href={productLinkPath} className="flex flex-col row-span-1 justify-end ">
                <div className="flex flex-col row-span-1 justify-end ">
                    <p className='text-sm  tracking-tighter text-center text-mira-orange group-hover:scale-105 group-hover:font-semibold'>{`£${product.price}`}</p>
                </div>
              </Link>

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