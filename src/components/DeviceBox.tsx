import styled from '@emotion/styled';
import { IpodDevice } from 'assets/IpodDevice';
import { MenuBtn } from './MenuBtn';

interface DeviceBoxProps {
  children: React.ReactNode;
}

const DeviceBoxWrapper = styled.div`
  min-width: 392px;
  min-height: 680px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export function DeviceBox({ children }: DeviceBoxProps) {
  return (
    <DeviceBoxWrapper>
      {children}
      <IpodDevice />
      <MenuBtn />
    </DeviceBoxWrapper>
  );
}
