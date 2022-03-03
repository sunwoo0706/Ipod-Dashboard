import { ScreenHeader } from 'components/ScreenHeader';
import styled from '@emotion/styled';

const NotFoundWrapper = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  color: #252a4a;
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
