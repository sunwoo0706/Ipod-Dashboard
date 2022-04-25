import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const typing = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  66% {
    opacity: 1;
  }
  99% {
    display: block;
    z-index: 1;
  }
  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
`;

const IntroWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1;
  font-size: 4rem;
  animation: ${fadeOutAnimation} 4s linear forwards;
  h1 {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    white-space: nowrap;
  }
  h1:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: 'Hello';
    color: black;
    overflow: hidden;
    border-right: 2px solid black;
    animation: ${typing} 2s steps(10) forwards;
  }
`;

export function Intro() {
  return (
    <IntroWrapper>
      <h1>Hello</h1>
    </IntroWrapper>
  );
}
