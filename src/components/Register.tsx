import Image from 'next/image'
import RecaptchaImg from '../../public/assets/RecaptchaLogo.svg.png'



const Register = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4">
            <div className="flex flex-col">
                <div className="h-20 flex justify-center items-center">
                    <p className="text-xl text-mira-black font-bold tracking-tighter">CREATE NEW CUSTOMER ACCOUNT</p>
                </div>
                <p className="text-xl text-mira-black font-semibold tracking-widest">Personal Information</p>
                <div className="h-3"/>
                <div className="h-[1px] bg-gray-200"/>
                <form className="flex flex-col gap-y-3">
                    <div className="pt-2">
                        <div className="flex gap-x-2">
                            <p className="text-sm font-semibold">First Name</p><p className="text-mira-text-red">*</p>
                        </div>
                        <input type="text" className="h-9 w-3/4 border-gray-200"></input>
                    </div>
                    <div>
                        <div className="flex gap-x-2">
                            <p className="text-sm font-semibold">Last Name</p><p className="text-mira-text-red">*</p>
                        </div>
                        <input type="text" className="h-9 w-3/4 border-gray-200"></input>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center">
                        <input type="checkbox" className="h-3 w-3"></input>
                        <p className="text-sm">Allow remote shopping assistance.</p>
                    </div>
                    <div className="h-3"/>

                    <p className="text-xl text-mira-black font-semibold tracking-widest">Sign-in Information</p>
                    <div className="h-[1px] bg-gray-200"/>
                    <div className="pt-2">
                        <div className="flex gap-x-2">
                            <p className="text-sm font-semibold">Email</p><p className="text-mira-text-red">*</p>
                        </div>
                        <input type="text" className="h-9 w-3/4 border-gray-200"></input>
                    </div>
                    <div>
                        <div className="flex gap-x-2">
                            <p className="text-sm font-semibold">Password</p><p className="text-mira-text-red">*</p>
                        </div>
                        <input type="text" className="h-9 w-3/4 border-gray-200"></input>
                    </div>
                    <div className="flex flex-row gap-x-2 items-center">
                        <input type="checkbox" className="h-3 w-3"></input>
                        <p className="text-sm">Show Password.</p>
                    </div>
                    <div className='h-2'/>
                    <div className="flex flex-row gap-x-2 items-center">
                        <input type="checkbox" className="h-3 w-3"></input>
                        <p className="text-sm">Remember Me.</p>
                    </div>
                    <div className="h-16 w-3/4 grid grid-cols-4 shadow-lg border-gray-100 border-2">
                        <div className="bg-blue-500 col-span-3 flex flex-col items-start justify-center px-4 gap-y-1">
                            <p className="text-white text-sm">protected by reCAPTCHA</p>
                            <div className="flex gap-x-2">
                                <p className="text-white text-xs">Privacy</p>
                                <p className="text-white text-xs">-</p>
                                <p className="text-white text-xs">Terms</p>
                            </div>
                        </div>
                        <Image src={RecaptchaImg} alt='/'/>
                    </div>
                    <div className=''/>
                    <div className='bg-mira-orange h-11 w-1/2 flex justify-center items-center'>
                        <p className='text-white text-xs font-medium'>SIGN UP</p>
                    </div>
                    <div className='h-5'/>                    
                </form>
                
               
            </div>
            

        </div>
    )



}


export default Register