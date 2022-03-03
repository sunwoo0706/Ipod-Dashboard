import type { NextPage } from 'next';
import { TabList } from 'components/TabList';
import { ScreenHeader } from 'components/ScreenHeader';
import { tabType } from 'shared/Type';

const tabs: tabType[] = [
  { title: 'Profile', link: '/profile' },
  { title: 'DashBoard', link: '/dashboard' },
];

const Home: NextPage = () => {
  return (
    <>
      <ScreenHeader title="iPod" />
      <TabList tabs={tabs} />
    </>
  );
};

export default Home;
