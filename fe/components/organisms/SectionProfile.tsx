import {Profile} from "@/types/common";
import Image from "next/image";
import Typography from "@/components/atom/Typography";
import Markdown from "@/components/atom/Markdown";

type Props = {
  data: Profile
}

const SectionProfile = ({data}: Props) => {
  return(
      <section className={'h-screen bg-waving'}>
        <div className={'h-full w-full flex items-center justify-center'}>
          <div className={'grid grid-cols-2 gap-5'}>
            <div className={'w-[300px] h-[300px] rounded-full overflow-hidden'}>
              {
                data.image && (
                    <Image
                      src={process.env.BE_URL+data.image.url}
                      width={data.image.width}
                      height={data.image.height}
                      className={'object-cover'}
                      style={{height: 'auto'}}
                      alt={data.image.name}
                    />
                  )
              }

            </div>
            <div className={'flex flex-col'}>
              <Typography renderAs={'h1'} content={data.name} textSize={'2xl'} />
              <Markdown className={'font-aeonik'}>
                {data.introduce}
              </Markdown>
            </div>
          </div>
        </div>
      </section>
  )
}
export default SectionProfile