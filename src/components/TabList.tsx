import { tabType } from 'shared/Type';
import { TabBox } from './TabBox';

interface TabListProps {
  tabs: tabType[];
}

export function TabList({ tabs }: TabListProps) {
  return (
    <nav>
      {tabs.map(({ title, link }, index) => (
        <TabBox key={index} title={title} link={link} index={index + 1} />
      ))}
    </nav>
  );
}
