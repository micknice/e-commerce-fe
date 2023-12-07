import Image from 'next/image'
import {BiSearch, BiCartAlt} from 'react-icons/bi'
import {RiMenu2Fill, RiUser3Fill} from 'react-icons/ri'
import SpaceTimeLogo from '../../public/assets/spacetime-logo.png'
import HeaderSlider from '../../components/HeaderSlider'
import ProductSliderCard from '../../components/ProductSliderCard'
import BigItemCard from '../../components/BigItemCard'
import ArticleCard from '@/components/ArticleCard'
import {AiFillStar} from 'react-icons/ai'

export default function Home() {
  return (
    <div className='h-full w-full bg-white flex flex-col'>
      {/* top image */}
      <div className=' h-[180px] relative z-10 '>
        <img className=' h-full w-full object-cover' src='https://images.pexels.com/photos/7534178/pexels-photo-7534178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
      </div>
      <div className=' h-56 w-full px-4 pt-6 pb-3 bg-white'>
        <div className=' h-full w-full flex flex-col gap-2'>
          <div className='h-6 w-3/4 flex gap-x-[2px] items-center'>
            <div className='flex flex-col '>
              <p className='text-green text-[9px] tracking-tighter font-semibold'>GETTING STARTED</p>
              <div className='h-[2px] bg-green'></div>
            </div>
            <p className='text-mira-subhead-text-grey text-[9px] tracking-tighter font-semibold'>/</p>
            <div className='flex flex-col'>
              <p className='text-mira-subhead-text-grey text-[9px] tracking-tighter font-semibold'>HOMEGYM</p>
              {/* <div className='h-[2px] bg-green'></div> */}
            </div>
            <p className='text-mira-subhead-text-grey text-[9px] tracking-tighter font-semibold'>/</p>
            <div className='flex flex-col'>
              <p className='text-mira-subhead-text-grey text-[9px] tracking-tighter font-semibold'>POWERLIFTING</p>
              {/* <div className='h-[2px] bg-green'></div> */}
            </div>
            <p className='text-mira-subhead-text-grey text-[9px] tracking-tighter font-semibold'>/</p>
            <div className='flex flex-col'>
              {/* <p className='text-green text-[9px] tracking-tighter font-semibold'>STRONGMAN</p> */}
              <p className='text-mira-subhead-text-grey text-[9px] tracking-tighter font-semibold'>STRONGMAN</p>
              {/* <div className='h-[2px] bg-green'></div> */}
            </div>
          </div>
          <div className='h-full w-full  flex flex-row gap-x-2'>
            <ProductSliderCard/>
            <ProductSliderCard/>
            <ProductSliderCard/>
          </div>
        </div>
      </div>
      <div className=' flex flex-col px-4 pt-2 bg-white'>
        <div>
          <p className='text-mira-headtext text-2xl font-bold tracking-tighter'>ESSENTIAL GYM EQUIPMENT</p>
        </div>
        <div className=' grid grid-cols-2 gap-x-2 gap-y-5 pt-6 md:grid-cols-4'>
          {/* big item card */}
          <BigItemCard subCategory={'weight-benches'} coverImgPath={'/mirafit-images/61-Mirafit-M20-Flat-Weight-Bench-Orange.jpg'} coverTitle={"Weight Benches"}/>
          <BigItemCard subCategory={'weights-and-bars'} coverImgPath={"/mirafit-images/81-black-and-orange-Mirafit-M3-20kg-Olympic-Barbell.jpg"} coverTitle={"Weights & Bars"}/>
          <BigItemCard subCategory={'power-cages-racks'} coverImgPath={"/mirafit-images/27-Black-Mirafit-M100-Power-Rack-and-Cable-System_1.jpg"} coverTitle={"Power Racks"}/>
          <BigItemCard subCategory={'kettlebells'} coverImgPath={"/mirafit-images/255-Set-of-Mirafit-Gen-II-Competition-Kettlebells-with-Storage-Rack.jpg"} coverTitle={"Kettlebells"}/>
          <BigItemCard subCategory={'medicine-balls'} coverImgPath={"/mirafit-images/111-Mirafit-Stitched-Medicine-Wall-Ball-7kg_1.jpg"} coverTitle={"Medicine Balls"}/>
          <BigItemCard subCategory={'squat-racks-stands'} coverImgPath={"/mirafit-images/54-mirafit-m130-squat-rack-with-adjustable-spotters.jpg"} coverTitle={"Squat Racks"}/>
          <BigItemCard subCategory={'pilates-yoga'} coverImgPath={"/mirafit-images/194-Mirafit-6mm-Cork-Natural-Yoga-Mat-Rolled-Up.jpg"} coverTitle={"Pilates & Yoga"}/>
          <BigItemCard subCategory={'boxing-equipment'} coverImgPath={"/mirafit-images/157-Mirafit-PU-Boxing-Gloves-12oz_2.jpg"} coverTitle={"Boxing"}/>
        </div>

      </div>
      <div className='h-10'></div>
      <div className='grid grid-cols-1 md:grid-cols-4 px-4 pt-2 gap-x-2 gap-y-5 h-screen'>
        <div className='h'>
          <p className='text-4xl font-bold'>LATEST UPDATES</p>
        </div>
        <ArticleCard imgUrl='/blog-images/Muscle-Up-on-Mirafit-M4-Half-Rack-1024x683.jpg' title='25 CRAZY FITNESS WORLD RECORDS'/>
        <ArticleCard imgUrl='/blog-images/Sled-Push-using-Mirafit-M3-Weight-Sled-1024x683.jpg' title='HOW STRENGTH TRAINING IMPROVES YOUR RUNNING SPEED'/>
        <ArticleCard imgUrl='/blog-images/Mirafit-Powerlifting-Bench-vs-Flat-Bench-1024x683.jpg' title='POWERLIFTING BENCH VS FLAT WEIGHT BENCH'/>
        <ArticleCard imgUrl='/blog-images/Mirafit-kettlebell-ballistics-vs-grinds-1024x683.jpg' title='KETTLEBELL BALLISTICS VS KETTLEBELL GRINDS'/>
        <div className='w-full h-20 border-[5px] border-mira-border-grey flex items-center justify-center '>
        <div className='h-11 w-screen flex items-center justify-center gap-x-[2px]'>
                <div className='h-6 w-6 bg-mira-green flex items-center justify-center'>
                    <AiFillStar color='#ffffff' size='16px'/>
                </div>
                <div className='h-6 w-6 bg-mira-green flex items-center justify-center'>
                    <AiFillStar color='#ffffff' size='16px'/>
                </div>
                <div className='h-6 w-6 bg-mira-green flex items-center justify-center'>
                    <AiFillStar color='#ffffff' size='16px'/>
                </div>
                <div className='h-6 w-6 bg-mira-green flex items-center justify-center'>
                    <AiFillStar color='#ffffff' size='16px'/>
                </div>
                <div className='h-6 w-6 bg-mira-green flex items-center justify-center'>
                    <AiFillStar color='#ffffff' size='16px'/>
                </div>

                <div className='flex items-center justify-start pl-2'>
                  <AiFillStar color='#00b67a' size='22px'/>
                  
                  <p className='text-mira-subhead-text-black text-sm  font-bold '>
                      Trustpilot
                  </p>
                </div>
            </div>   

        </div>
      </div>
    </div>
  )
}
