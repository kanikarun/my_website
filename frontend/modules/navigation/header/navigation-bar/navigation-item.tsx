import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

import { INavigation } from '../../api/navigation.interface';

export const NavLink: React.FC<INavigation> = ({ items }) => {
  return (
    <div className="flex items-center">
      {items?.map(item => (
        <Link
          key={item.name}
          href={item.url}
          className={cn('text-lg text-black dark:text-white py-2 px-5 rounded-md hover:text-primary-500 dark:hover:text-primary-500 transition-colors')}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

interface SmNavLinkProps extends INavigation {
  onClick?: () => void;
}

export const SmNavLink: React.FC<SmNavLinkProps> = ({ items, onClick }) => (
  <div className="grid grid-cols-2 gap-2">
    {items?.map(item => (
      <Link
        key={item.name}
        href={item.url}
        className="text-base font-medium dark:text-white text-black py-3 px-2"
        onClick={onClick}
      >
        {item.name}
      </Link>
    ))}
  </div>
);

export const NavButton: React.FC<{ onClick: () => void; isNavOpen: boolean }> = ({ onClick, isNavOpen }) => {
  const Icon = isNavOpen ? XMarkIcon : Bars3Icon;
  return (
    <Button onClick={onClick} variant="outline" size="icon" className=" bg-primary-500/95 rounded-base">
      <Icon className=" size-5 text-white dark:text-white" aria-hidden="true" />
    </Button>
  );
};
