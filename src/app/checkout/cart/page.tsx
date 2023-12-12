"use client"
import Cart from '../../../components/Cart'
import CartDesktop from '../../../components/CartDesktop'
import useMediaQuery  from '@mui/material/useMediaQuery'

const Register = () => {
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

export default Register