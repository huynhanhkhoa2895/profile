import { twMerge } from 'tailwind-merge';
import { ITechnology } from '@/types/common';
import Technology from '@/components/atom/Technology';

const TechnologySection = ({
  technologies,
}: {
  technologies: ITechnology[];
}) => {
  console.log('technologies', technologies);
  return (
    <div className={twMerge('flex gap-3 items-center justify-end')}>
      {technologies &&
        technologies.map((technology: ITechnology, index: number) => (
          <Technology key={index} technology={technology} />
        ))}
    </div>
  );
};
export default TechnologySection;
