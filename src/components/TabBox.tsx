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

interface SmartLinkProps {
  link: string;
  children: React.ReactNode;
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

function SmartLink({ link, children }: SmartLinkProps) {
  const regEx: RegExp =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  return regEx.test(link) ? (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link href={link}>{children}</Link>
  );
}

export function TabBox({ title, link, index }: TabBoxProps) {
  const [focusedIndex, setFocusedIndex] = useRecoilState(focusedIndexState);

  return (
    <TabBoxWrapper
      focused={focusedIndex === index}
      onMouseOver={() => setFocusedIndex(index)}
    >
      <span>{title}</span>
      <span>&gt;</span>
    </TabBoxWrapper>
  );
}
