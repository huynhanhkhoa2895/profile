import { Profile } from '@/types/common';
import Image from 'next/image';
import Typography from '@/components/atom/Typography';
import Markdown from '@/components/atom/Markdown';
import TechnologySection from '@/components/molecule/TechnologySection';

type Props = {
  data: Profile;
};

const SectionProfile = ({ data }: Props) => {
  return (
    <section className={'h-screen bg-waving'}>
      <div className={'h-full w-full flex items-center justify-center'}>
        <div className={'max-w-[70%] mx-auto'}>
          <div className={'flex justify-center items-center gap-10'}>
            <div
              className={
                'shrink-0 w-[300px] h-[300px] rounded-full overflow-hidden'
              }
            >
              {data.image && (
                <Image
                  src={process.env.BE_URL + data.image.url}
                  width={data?.image?.width || 0}
                  height={data.image.height || 0}
                  className={'object-cover'}
                  style={{ height: 'auto' }}
                  alt={data.image.name}
                />
              )}
            </div>
            <div className={'flex flex-col'}>
              <Typography
                renderAs={'h1'}
                content={data.name}
                textSize={'2xl'}
              />
              <TechnologySection
                technologies={data.technology_proficient || []}
              />
              <Markdown className={'font-aeonik'}>{data.introduce}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionProfile;
