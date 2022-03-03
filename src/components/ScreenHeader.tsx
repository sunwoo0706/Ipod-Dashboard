import styled from '@emotion/styled';

interface headerProps {
  title: string | string[] | undefined;
}

const ScreenHeaderWrapper = styled.header`
  width: 100%;
  font-size: 16px;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 5px;
  border-bottom: 2px solid #252a4a;
  color: #252a4a;
`;

export function ScreenHeader({ title }: headerProps) {
  return (
    <ScreenHeaderWrapper>
      <h1>{title}</h1>
    </ScreenHeaderWrapper>
  );
}
