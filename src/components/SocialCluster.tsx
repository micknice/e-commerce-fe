import {FaFacebookF, FaInstagram, FaYoutube, FaTiktok} from 'react-icons/fa'

const SocialCluster = () => {
    return (
        <div className='flex flex-row  items-center justify-center gap-x-4 '>
                <div className='rounded-full bg-mira-socialbg-grey h-12 w-12 flex items-center justify-center'>
                    <FaFacebookF color='white' size='24px'/>
                </div>
                <div className='rounded-full bg-mira-socialbg-grey h-12 w-12 flex items-center justify-center'>
                    <FaInstagram color='white' size='24px'/>
                </div>
                <div className='rounded-full bg-mira-socialbg-grey h-12 w-12 flex items-center justify-center'>
                    <FaYoutube color='white' size='24px'/>
                </div>
                <div className='rounded-full bg-mira-socialbg-grey h-12 w-12 flex items-center justify-center'>
                    <FaTiktok color='white' size='24px'/>
                </div>
            </div>
    )
}

export default SocialCluster