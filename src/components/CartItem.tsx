"use client"

const CartItem = (product:any) => {
    console.log(product, 'product @ cartItem')
    return (
        <div className='grid grid-rows-5 h-[30vh] '>
                                <div className='h-full row-span-2 flex flex-row justify-start items-center gap-x-4'>
                                    <img src='/mirafit-images/6-Mirafit-Dual-Handle-Cable-Attachment.jpg' className='h-5/6'/>
                                    <div className='flex h-2/6 items-start'>
                                            <p className='text-xs tracking-wide'>{product.product.name}</p>
                                    </div>
                                   

                                </div>
                                <div className='row-span-2 grid grid-cols-3'>
                                    <div className='col-span-1 h-full flex flex-col items-center justify-center gap-y-2'>
                                        <p className='text-sm font-semibold tracking-wide'>Price:</p>
                                        {product &&
                                            <p className='text-sm font- tracking-wide'>{`£${product.product.price}`}</p>
                                        }
                                    </div>
                                    <div className='col-span-1 h-full flex flex-col items-center justify-center gap-y-2'>
                                        <p className='text-sm font-semibold tracking-wide'>Qty:</p>
                                        <div className='border h-8 w-12 flex justify-center items-center'>
                                            <p className='text-sm font- tracking-wide'>1</p>
                                        </div>
                                    </div>
                                    <div className='col-span-1 h-full flex flex-col items-center justify-center gap-y-2'>
                                        <p className='text-sm font-semibold tracking-wide'>Subtotal:</p>
                                        <p className='text-sm font- tracking-wide'>£129.95</p>
                                    </div>
                                </div>
                                <div className='row-span-1 flex flex-row items-center justify-center gap-x-4 pb-4'>
                                    <div className='bg-mira-headtext flex items-center justify-center h-8 px-3'>
                                        <p className='text-white text-sm font-light tracking-wide'>Edit</p>
                                    </div>
                                    <div className='bg-mira-headtext flex items-center justify-center h-8 px-3'>
                                        <p className='text-white text-sm font-light tracking-wide'>Remove Item</p>
                                    </div>
                                </div>
                                <div className='h-[1px] bg-mira-grey '/>
                                

                            </div>
    )
}

export default CartItem