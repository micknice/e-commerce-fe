
const ForgotPassword = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4">
            <div className="flex flex-col">
                <div className="h-20 flex justify-center items-center">
                    <p className="text-2xl text-mira-black font-bold tracking-tighter">FORGOT YOUR PASSWORD?</p>
                </div>
                <form className="flex flex-col gap-y-3">
                    <p className="text-sm ">Please enter your email address below to receive a password reset link.</p>
                    <div className="pt-2">
                        <div className="flex gap-x-2">
                            <p className="text-sm font-semibold">Email</p><p className="text-mira-text-red">*</p>
                        </div>
                        <input type="text" className="h-9 w-3/4 border-gray-200"></input>
                    </div>
                    
                    <div className=''/>
                        <div className='bg-mira-orange h-11 w-1/2 flex justify-center items-center'>
                            <p className='text-white text-xs font-semibold'>RESET MY PASSWORD</p>
                        </div>
                    <div/>
                    <div className='h-1'/>
                    
                </form>
                
               
            </div>
            

        </div>
    )



}


export default ForgotPassword