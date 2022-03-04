import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { focusedIndexState } from 'shared/Atom';
import pallete from 'shared/Style';

interface TabBoxWrpperProps {
  focused: boolean;
}

interface TabBoxProps {
  title: string;
  link: string;
  index: number;
}

const focusedStyle = css`
  color: ${pallete.scheme.gray};
  background-color: ${pallete.scheme.navy};
`;

const TabBoxWrapper = styled.div<TabBoxWrpperProps>`
  width: 100%;
  height: 30px;
  color: ${pallete.scheme.navy};
  margin-top: 2px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ focused }) => focused && focusedStyle}
  &:hover {
    cursor: pointer;
  }
`;

export function TabBox({ title, link, index }: TabBoxProps) {
  const [focusedIndex, setFocusedIndex] = useRecoilState(focusedIndexState);

  return (
    <Link href={link} passHref>
      <TabBoxWrapper
        focused={focusedIndex === index}
        onMouseOver={() => setFocusedIndex(index)}
      >
        <span>{title}</span>
        <span>&gt;</span>
      </TabBoxWrapper>
    </Link>
  );
}
