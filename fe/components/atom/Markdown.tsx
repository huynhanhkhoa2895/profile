import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import { twMerge } from 'tailwind-merge';
import { parseLinkToLocale } from '@/utils/helpers';

type Props = {
  children: string;
  className?: string;
  textSize?:
      'md'
      | 'sm'
      | 'lg'
      | 'xl'
      | '2xl';
};

const Markdown = ({ children, className, textSize }: Props) => {

  const renderSize =  () => {
    switch (textSize){
      case 'sm':
        return 'text-[18px]';
      case 'md':
        return 'text-[24px]';
      case 'lg':
        return 'text-[36px]';
      case 'xl':
        return 'text-[48px]';
      case '2xl':
        return 'text-[94px]';
    }
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{ a: LinkRenderer }}
      className={twMerge('hyphens-auto',renderSize(), className || '')}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;

const LinkRenderer = (props: any) => {
  return (
    <a
      href={
        props.href.startsWith('http')
          ? props.href
          : parseLinkToLocale(props.href)
      }
      target={props.href.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};
