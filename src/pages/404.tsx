import { ScreenHeader } from 'components/ScreenHeader';
import styled from '@emotion/styled';
import pallete from 'shared/Style';

const NotFoundWrapper = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  color: ${pallete.scheme.navy};
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function NotFoundPage() {
  return (
    <>
      <ScreenHeader title="404" />
      <NotFoundWrapper>Not Found</NotFoundWrapper>
    </>
  );
}

export default NotFoundPage;
