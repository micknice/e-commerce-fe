"use client"
import {useState, useEffect} from 'react'
import {imgUrlToFilePath} from '../../utils/utils'
import {removeItemFromBasket} from '../api/ecommerceApi'
import {useCurrentUser} from '../api/auth/useCurrentUser'
import { useCartContext } from '@/context/cartContext'

interface CartItemProps {
    product: any
    qty: number
    decrementSubTotalCallback: Function

}

const CartItem = ({product, qty, decrementSubTotalCallback}: CartItemProps) => {
    const {cartContext, updateCartContext} = useCartContext()
    const currentUser = useCurrentUser()

    const [imgPath, setImgPath] = useState('')
    const [qtyActual, setQtyActual] = useState(qty)
    const [subTotal, setSubtotal] = useState(0)

    useEffect(() => {
        const imgStr = `${product.id -1}-${imgUrlToFilePath(product.img)}`
            setImgPath(`/mirafit-images/${imgStr}`)
            
    }, [product])

    useEffect(() => {
        setQtyActual(qty)
    }, [qty])

    const handleRemoveItem = async() => {
        if (currentUser) {
            if (qtyActual > 0) {
                await removeItemFromBasket(currentUser.jwt, currentUser.user.id, product.id)
                setQtyActual(((prevQty) => prevQty -1))
                decrementSubTotalCallback(product.price)
                updateCartContext()
            }
        }
    }

    return (
        <div className='grid grid-rows-5 h-[30vh] '>
            <div className='h-full row-span-2 flex flex-row justify-start items-center gap-x-4'>
                <img src={imgPath} className='h-5/6' alt={`${product.name}`}/>
                <div className='flex h-2/6 items-start'>
                    {product &&
                        <p className='text-xs tracking-wide'>{product.name}</p>
                    }
                </div>
            </div>
            <div className='row-span-2 grid grid-cols-3'>
                <div className='col-span-1 h-full flex flex-col items-center justify-center gap-y-2'>
                    <p className='text-sm font-semibold tracking-wide'>Price:</p>
                    {product &&
                        <p className='text-sm font- tracking-wide'>{`£${product.price}`}</p>
                    }
                </div>
                <div className='col-span-1 h-full flex flex-col items-center justify-center gap-y-2'>
                    <p className='text-sm font-semibold tracking-wide'>Qty:</p>
                    <div className='border h-8 w-12 flex justify-center items-center'>
                            <p className='text-sm font- tracking-wide'>{qtyActual}</p>
                    </div>
                </div>
                <div className='col-span-1 h-full flex flex-col items-center justify-center gap-y-2'>
                    <p className='text-sm font-semibold tracking-wide'>Subtotal:</p>
                    <p className='text-sm font- tracking-wide'>{`£${(product.price * qtyActual).toFixed(2)}`}</p>
                </div>
            </div>
            <div className='row-span-1 flex flex-row items-center justify-center gap-x-4 pb-4'>
                <div className='bg-mira-headtext flex items-center justify-center h-8 px-3 select-none hover:bg-mira-orange'>
                    <p className='text-white text-sm font-light tracking-wide'>Edit</p>
                </div>
                <div className='bg-mira-headtext flex items-center justify-center h-8 px-3 select-none hover:bg-mira-orange' onClick={handleRemoveItem}>
                    <p className='text-white text-sm font-light tracking-wide'>Remove Item</p>
                </div>
            </div>
            <div className='h-[1px] bg-mira-grey '/>
        </div>
    )
}

export default CartItem