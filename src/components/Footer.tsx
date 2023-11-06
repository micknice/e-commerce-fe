import {BiChevronRight} from 'react-icons/bi'
import SocialCluster from './SocialCluster'
import AcceptedPaymentCluster from './AcceptedPaymentCluster'

const Footer = () => {
    return (
        <div className='h-full w-full bg-mira-black'>
            {/* footer menu */}
            <div className='h-[570px] bg-mira-footer-charcoal flex flex-col items-center'>
                <div className='py-14 items-center flex flex-col gap-y-5 justify-center'>
                    <div className='flex flex-row justify-center items-center pl-4'>
                        <p className='text-mira-offwhite text-3xl font-bold'>SHOP</p>
                        <BiChevronRight color='white' size='36px'/>
                    </div>
                    <p className='text-mira-offwhite text-3xl font-bold'>WE ACCEPT</p>
                    <AcceptedPaymentCluster/>
                    <div className='flex flex-row justify-center items-center pl-4'>
                        <p className='text-mira-offwhite text-3xl font-bold'>HELP</p>
                        <BiChevronRight color='white' size='36px'/>
                    </div>
                    <div className='flex flex-row justify-center items-center pl-4'>
                        <p className='text-mira-offwhite text-3xl font-bold'>COMPANY</p>
                        <BiChevronRight color='white' size='36px'/>
                    </div>
                    <div className='flex flex-row justify-center items-center pl-4'>
                        <p className='text-mira-offwhite text-3xl font-bold'>NEWSLETTER</p>
                        <BiChevronRight color='white' size='36px'/>
                    </div>
                    <div className='flex flex-row h-9 w-full'>
                        <div className='w-2/3 '>
                            <input type='text' placeholder='Enter your email address' className='w-full h-full text-xs'></input>
                        </div>
                        <div className='w-1/3 bg-mira-orange flex flex-row justify-center items-center'>
                            <p className='text-sm text-white font-medium'>SIGN UP</p>
                            <BiChevronRight color='white' size='20px'/>
                        </div>

                    </div>
                </div>
                <SocialCluster/>
            </div>
        
            {/* terms */}
            <div className='h-[180px] w-full  grid-cols-1 flex flex-col justify-center items-center py-4 px-6 gap-y-6'>
                <p className='text-xs text-mira-subhead-text-grey tracking-normal text-center'>
                    This text takes the place of financing small print. This site, while having all the functionality of an actual e-commerce store
                    is only a demo. This is not a business and none of the items listed here are actually for sale. Any attempt to purchase will result in a 
                    failure at the point of payment. 
                </p>
                <p className='text-xs text-mira-subhead-text-grey tracking-normal'>
                © 2023 Mike McCullagh
                </p>
            </div>
      </div>
    )
}


export default Footer