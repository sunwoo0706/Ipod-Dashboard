import styled from '@emotion/styled';

interface ScreenBoxProps {
  children: React.ReactNode;
}

const ScreenBoxWrapper = styled.div`
  width: 252px;
  height: 205px;
  position: absolute;
  top: 58px;
  left: 50%;
  transform: translate(-51.2%, 0);
  background: #abbbd2;
  z-index: 1;
`;

export function ScreenBox({ children }: ScreenBoxProps) {
  return <ScreenBoxWrapper>{children}</ScreenBoxWrapper>;
}
