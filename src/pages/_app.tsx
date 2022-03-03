import styled from '@emotion/styled';
import { DeviceBox } from 'components/DeviceBox';
import { ScreenBox } from 'components/ScreenBox';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { BounceInAnimation, GlobalStyle } from 'shared/Style';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: ${BounceInAnimation} 0.8s ease-in-out;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Container>
          <DeviceBox>
            <ScreenBox>
              <Component {...pageProps} />
            </ScreenBox>
          </DeviceBox>
        </Container>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
