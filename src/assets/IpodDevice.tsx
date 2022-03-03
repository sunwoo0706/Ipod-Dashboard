import styled from '@emotion/styled';
import Image from 'next/image';

const IpodDeviceWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  pointer-events: none;
  z-index: -1;
`;

export function IpodDevice() {
  return (
    <IpodDeviceWrapper>
      <Image
        alt="Background Ipod Image"
        src="/images/Ipod.png"
        width="392px"
        height="680px"
        objectFit="cover"
        quality={100}
      />
    </IpodDeviceWrapper>
  );
}
