import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { IPortfolio } from '../api/portfolio.interface';

const DATA: { en: IPortfolio['type'] | 'All'; km?: string }[] = [
  { en: 'All' },
  { en: 'ERP' },
  { en: 'Mobile' },
  { en: 'Web' }
];

interface Props {
  value: string;
  onValueChange?: (v: string) => void;
}

export const PortfolioTabs: React.FC<Props> = props => {
  return (
    <Tabs className="container" {...props}>
      <TabsList className="mx-auto bg-navy-blue/10 dark:bg-navy-blue/50">
        {DATA.map(x => (
          <TabsTrigger
            className="hover:cursor-pointer px-5 py-3 data-active:bg-black dark:data-active:bg-black/80 data-active:text-white data-active:hover:text-white/80"
            key={x.en}
            value={x.en}
          >
            {x.en}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};