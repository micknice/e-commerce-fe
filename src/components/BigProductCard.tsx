'use client'
import { useEffect, useState } from "react"
import {imgUrlToFilePath, extractTextBetweenSuffixAndLastSlash} from '../../utils/utils'
import Link from 'next/link'
import {addItemsToBasket} from '../api/ecommerceApi'
import { useCurrentUser } from "@/api/auth/useCurrentUser"
import { useCartContext } from "@/context/cartContext"

interface BigProductProps {
  product: any
}
const BigProductCard = ({product}: BigProductProps) => {
  const {cartContext, updateCartContext} = useCartContext()

  const currentUser = useCurrentUser()

  const [prod, setProd] = useState('')
  const [title, setTitle] = useState('')
  const [imgPath, setImgPath] = useState('public/assets/MIKFIT.png')
  const [productLinkPath, setProductLinkPath] = useState('/category')
  useEffect(() => {
    if (product.id) {
      const imgStr = `${product.id -1}-${imgUrlToFilePath(product.img)}`
      setImgPath(`/mirafit-images/${imgStr}`)
      setTitle(product.name)
      const productStr = imgUrlToFilePath(product.img).slice(0, imgStr.length -4)
      setProductLinkPath(`/product/${product.id}${productStr}`)
    }
  }, [product])

  const handleAddToCart = async() => {
    if (currentUser) {
      const basket = await addItemsToBasket(currentUser.jwt, currentUser.user.id, product.id)
      updateCartContext()

    }
  }

    return (
        <div className='col-span-1  grid grid-rows-5 gap-y-2 h-[45vh]  w-full py-4 hover:shadow-lg group' >
            {/* img div */}
            <Link href={productLinkPath} className=' h-44  w-full row-span-3 group-hover:scale-105 ' >
              <div className=' h-44  w-full row-span-3 group-hover:scale-105 '>
                <img className=' h-full w-full object-contain md:object-contain relative' src={imgPath} />
                
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
                  <div className="flex items-center justify-center bg-mira-orange hover:bg-mira-black h-10 w-2/3 group-hover:scale-105" onClick={handleAddToCart}>
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