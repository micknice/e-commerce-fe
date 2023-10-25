import Image from "next/image";
import OfficeImg from '../../public/assets/office1.jpg'


const ArticleCard = () => {

    return (
        <div className="  w-full ">
            <div className="flex flex-col gap-y-2 items-start justi">
            <div className='h-[3px] w-full bg-mira-black'></div>
                <div className="h-16 flex items-start justify-start">
                    <p className="text-xl font-bold">HOW TO TRAIN DURING A CUT</p>
                </div>
               
                <Image src={OfficeImg} alt="/"/>
                <div className="border-[2px] border-mira-orange h-9 w-1/3 flex justify-center items-center">
                    <p className="text-mira-orange tracking-tighter font-medium">READ MORE</p>
                </div>


            </div>

        </div>
    )
}

export default ArticleCard;