import { ElementType, HTMLAttributes, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends HTMLAttributes<ReactElement> {
  renderAs?: ElementType;
  content?: string;
  className?: string;
  font?: 'grotesk' | 'aeonik';
  textSize?: 'md' | 'sm' | 'lg' | 'xl' | '2xl' | '2sm';
}

const Typography = ({
  renderAs = 'div',
  content = '',
  className = '',
  textSize = 'md',
  font = 'grotesk',
}) => {
  const Element: any = renderAs;

  const renderSize = () => {
    switch (textSize) {
      case '2sm':
        return 'text-[14px]';
      case 'sm':
        return 'text-[18px]';
      case 'md':
        return 'text-[24px]';
      case 'lg':
        return 'text-[36px]';
      case 'xl':
        return 'text-[48px]';
      case '2xl':
        return 'text-[48px] lg:text-[94px]';
    }
  };

  return (
    <Element
      className={twMerge(
        'leading-normal',
        font === 'grotesk' ? 'font-grotesk' : 'font-aeonik',
        renderSize(),
        className,
      )}
    >
      {content}
    </Element>
  );
};
export default Typography;
