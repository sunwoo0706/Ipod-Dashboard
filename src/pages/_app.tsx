import styled from '@emotion/styled';
import { DeviceBox } from 'components/DeviceBox';
import { Intro } from 'components/Intro';
import { ScreenBox } from 'components/ScreenBox';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { GlobalStyle } from 'shared/Style';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Container>
          <Intro />
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
