import styled from '@emotion/styled';
import pallete from 'shared/Style';

interface headerProps {
  title: string | string[] | undefined;
}

const ScreenHeaderWrapper = styled.header`
  width: 100%;
  font-size: 16px;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 5px;
  border-bottom: 2px solid ${pallete.scheme.navy};
  color: ${pallete.scheme.navy};
`;

export function ScreenHeader({ title }: headerProps) {
  return (
    <ScreenHeaderWrapper>
      <h1>{title}</h1>
    </ScreenHeaderWrapper>
  );
}
