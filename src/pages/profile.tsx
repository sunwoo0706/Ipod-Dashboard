import { ScreenHeader } from 'components/ScreenHeader';
import styled from '@emotion/styled';
import pallete from 'shared/Style';

const ProfileWrapper = styled.div`
  width: 100%;
  height: 100%;
  section {
    width: 100%;
    height: fit-content;
    font-size: 13px;
    padding: 0 10px;
    margin-top: 10px;
    color: ${pallete.scheme.navy};
    h2 {
      & + h2 {
        margin-top: 12px;
      }
    }
  }
`;

function profile() {
  return (
    <ProfileWrapper>
      <ScreenHeader title="Profile" />
      <section>
        <div>
          <h2>name: Sunwoo Lee</h2>
          <h2>gender: male</h2>
          <h2>phone: 010-9065-7211</h2>
          <h2>
            email:{' '}
            <a href="mailto:sunwoo0706@icloud.com">sunwoo0706@icloud.com</a>
          </h2>
        </div>
      </section>
    </ProfileWrapper>
  );
}

export default profile;
