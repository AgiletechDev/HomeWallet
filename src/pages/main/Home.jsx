import { AppLayout } from '../../layouts/AppLayout';

import { ContactView } from '../../components/contact/ContactView';
import { ViewSection } from '../../components';
import {
  HeroHomeView,
  ExpectationHomeView,
  WalletHomeView,
  ExchangeHomeView,
  PresaleHomeView,
  MultiUtilityHomeView,
  SecurityHomeView,
  DownloadAppHomeView,
  FAQHomeView,
} from '../../views/home';

export const Home = () => {
  return (
    <AppLayout>
      <HeroHomeView />
      <ExpectationHomeView />

      <WalletHomeView />
      <ExchangeHomeView />
      <PresaleHomeView />
      <MultiUtilityHomeView />

      <SecurityHomeView />
      <DownloadAppHomeView />
      <FAQHomeView />

      <ViewSection>
        <ContactView />
      </ViewSection>
    </AppLayout>
  );
};
