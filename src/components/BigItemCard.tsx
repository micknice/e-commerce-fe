const BigItemCard = () => {
    return (
        <div className='col-span-1  flex flex-col gap-y-2 h-52'>
            {/* img div */}
            <div className=' h-44 w-full'>
                <img className=' h-full w-full object-cover' src='https://images.pexels.com/photos/7534178/pexels-photo-7534178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            </div>
            {/* TITLE DIV */}
            <div>
              <p className='text-mira-headtext text-xl font-bold tracking-tighter'>WEIGHT BENCHES</p>
            </div>
          </div>
    )
}

export default BigItemCard