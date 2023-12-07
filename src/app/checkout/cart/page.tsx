"use client"
import Cart from '../../../components/Cart'
import CartDesktop from '../../../components/CartDesktop'
import { useMediaQuery } from '@mui/material'

const register = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <>
        {isMobile ? (
            <Cart/>
            
            ) : (
            <CartDesktop/>
                
            )}
        </>
    )
}

export default register