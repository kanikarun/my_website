import { ReactNode } from 'react';

import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

export interface LinkButtonProps {
  type: 'primary' | 'secondary' | 'default' | 'outline';
  text: string | ReactNode;
  link: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
}

/**
 * @deprecated
 */
export const LinkButton: React.FC<LinkButtonProps> = props => {
  const { type, text, link, target, className } = props;
  return (
    <Link
      target={target}
      href={link}
      className={cn(
        `${className} relative rounded-md border px-5 py-2 text-base font-bold duration-150 lg:px-6 lg:py-3`,
        {
          'border-primary-500 bg-primary-500 text-white hover:border-primary-600 hover:bg-primary-600':
            type === 'default',
          'border-white text-white': type === 'primary',
          'border-white bg-white text-primary-500': type === 'secondary',
          'border-white text-white hover:border-primary-500 hover:text-primary-500': type === 'outline'
        },
        className
      )}
    >
      {text}
    </Link>
  );
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'default' | 'outline';
}

/**
 * @deprecated
 */
export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = props => {
  const { children, className, variant, ...rest } = props;
  return (
    <button
      {...rest}
      className={cn(
        `${className} relative rounded-md border-2 px-5 py-3 text-base font-bold duration-150 lg:px-6 lg:py-4`,
        {
          'border-primary-500 bg-primary-500 text-white hover:border-primary-600 hover:bg-primary-600':
            variant === 'default',
          'border-primary-500 bg-primary text-white': variant === 'primary',
          'border-white bg-white text-black': variant === 'secondary',
          'border-white text-white hover:border-primary-500 hover:text-primary-500': variant === 'outline'
        }
      )}
    >
      {children}
    </button>
  );
};