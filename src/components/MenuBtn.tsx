import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useResetRecoilState } from 'recoil';
import { focusedIndexState } from 'shared/Atom';

const MenuBtnWrapper = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 293px;
  left: 119px;
  z-index: 1;
  border-radius: 50%;
`;

export function MenuBtn() {
  const resetFocused = useResetRecoilState(focusedIndexState);
  const router = useRouter();

  return (
    <a
      onClick={() => {
        router.push('/');
        resetFocused();
      }}
    >
      <MenuBtnWrapper />
    </a>
  );
}
