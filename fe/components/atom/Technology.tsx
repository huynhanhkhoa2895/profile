import { ITechnology } from '@/types/common';
import Image from 'next/image';
import Typography from '@/components/atom/Typography';

const Technology = ({ technology }: { technology: ITechnology }) => {
  return (
    <div className={'flex flex-col items-center'}>
      <div className={'w-[30px] h-[30px]'}>
        {technology.image && (
          <Image
            src={process.env.BE_URL + technology.image.url}
            width={technology.image.width}
            height={technology.image.height}
            style={{ height: 'auto' }}
            className={'object-contain'}
            alt={technology.name}
          />
        )}
      </div>
      <Typography textSize={'2sm'} content={technology.name || ''} />
    </div>
  );
};
export default Technology;
