import { ScreenHeader } from 'components/ScreenHeader';
import { TabList } from 'components/TabList';
import { tabType } from 'shared/Type';

const tabs: tabType[] = [
  { title: 'Github', link: 'https://github.com/sunwoo0706' },
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/sunwoo0706/' },
  { title: 'Blog', link: 'https://blog.sunw.ooo' },
];

function DashBoard() {
  return (
    <>
      <ScreenHeader title={'DashBoard'} />
      <TabList tabs={tabs} />
    </>
  );
}

export default DashBoard;
