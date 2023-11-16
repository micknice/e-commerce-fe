import Image from "next/image";
import OfficeImg from '../../public/assets/office1.jpg'
import {BiChevronRight} from 'react-icons/bi'


const ArticleCard = () => {

    return (
        <div className="  w-full ">
            <div className="flex flex-col gap-y-2 items-start justi">
            <div className='h-[3px] w-full bg-mira-black '></div>
                <div className="h-auto flex items-start justify-start pb-2">
                    <p className="text-2xl font-bold text-mira-subhead-text-black tracking-tight md:text-lg">HOW TO TRAIN DURING A CUT</p>
                </div>
               
                <Image src={OfficeImg} alt="/" className="md:h-48 object-cover pb-1"/>
                <div className="border-[2px] border-mira-orange h-9 w-1/3 md:w-1/2 flex justify-center items-center text-mira-orange ">
                    <p className="text-mira-orange tracking-tighter font-semibold text-sm">READ MORE</p>
                    <BiChevronRight height="20px"/>
                </div>


            </div>

        </div>
    )
}

export default ArticleCard;