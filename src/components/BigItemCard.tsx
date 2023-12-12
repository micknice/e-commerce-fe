import Link from 'next/link'
import {frontPageUrlLookup} from '../../utils/frontPageUrlLookup'


interface BigItemProps {
  subCategory: string
  coverImgPath: string
  coverTitle: string
}
const BigItemCard = ({subCategory, coverImgPath, coverTitle}: BigItemProps) => {
    return (
      <Link href={frontPageUrlLookup[subCategory as keyof typeof frontPageUrlLookup]}>
        <div className='col-span-1  flex flex-col gap-y-2 h-52 md:h-72'>
            {/* img div */}
            <div className='h-44 md:h-60 w-full relative'>
              <img
                className="h-full w-full absolute inset-0 object-fill opacity-10 z-10 "
                src={"/assets/Vignette-Transparent.png"}
                alt="Vignette"
              />
              <img
                className='h-full w-full absolute inset-0 object-cover md:object-contain z-0 '
                src={coverImgPath}
                alt="Cover Image"
              />
            </div>
            {/* TITLE DIV */}
            <div>
                <p className='text-mira-headtext text-xl font-bold tracking-tighter'>{coverTitle.toUpperCase()}</p>
            </div>
          </div>
      </Link>
    )
}

export default BigItemCard