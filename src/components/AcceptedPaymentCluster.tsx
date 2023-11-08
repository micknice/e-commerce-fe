import {RiVisaLine, RiMastercardLine, RiPaypalFill} from 'react-icons/ri'
import {SiKlarna} from 'react-icons/si'


const AcceptedPaymentCluster = () => {

    
    return (
        <div className='flex flex-row gap-x-4'>
            <div className='bg-gray-300 text-mira-subhead-text-black h-8 w-12 rounded flex justify-center items-center'>
                <RiVisaLine size='34px'/>
            </div>
            <div className='bg-gray-300 text-mira-subhead-text-black h-8 w-12 rounded flex justify-center items-center'>
                <RiMastercardLine size='34px'/>
            </div>
            <div className='bg-gray-300 text-mira-subhead-text-black h-8 w-12 rounded flex justify-center items-center'>
                <RiPaypalFill size='28px'/>
            </div>
            <div className='bg-gray-300 text-mira-subhead-text-black h-8 w-12 rounded flex justify-center items-center'>
                <SiKlarna size='28px'/>
            </div>
        </div>
    )
}

export default AcceptedPaymentCluster