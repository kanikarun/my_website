import { Locale } from 'next-intl';

import { getNavigation } from '../api/navigation.api';
import { NavigationBar } from './navigation-bar';

export const Header: React.FC<{ locale: Locale }> = async ({ locale }) => {
  const navigation = await getNavigation(locale);

  return <NavigationBar navigation={navigation} />;
};
