import styled from 'styled-components';

export const Icon = styled.div`
  background: #283583 linear-gradient(transparent 0%, transparent 50%, #ffffff 50%, #ffffff 100%);
  position: relative;
  width: 52px;
  height: 88px;
  border-radius: 100px;
  background-size: 100% 200%;

  :before, :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  :before {
    width: 46px;
    height: 82px;
    background-color: #ffffff;
    border-radius: 100px;
  }

  :after {
    background-color: #EB5B49;
    width: 5px;
    height: 10px;
    border-radius: 100%;
    -webkit-animation: trackBallSlide 5s linear infinite;
    animation: trackBallSlide 5s linear infinite;
  }

  @-webkit-keyframes trackBallSlide {
    0% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
    6% {
      opacity: 1;
      transform: scale(0.9) translateY(5px);
    }
    14% {
      opacity: 0;
      transform: scale(0.4) translateY(40px);
    }
    15%, 19% {
      opacity: 0;
      transform: scale(0.4) translateY(-20px);
    }
    28%, 29.99% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
    30% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
    36% {
      opacity: 1;
      transform: scale(0.9) translateY(5px);
    }
    44% {
      opacity: 0;
      transform: scale(0.4) translateY(40px);
    }
    45%, 49% {
      opacity: 0;
      transform: scale(0.4) translateY(-20px);
    }
    58%, 59.99% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
    60% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
    66% {
      opacity: 1;
      transform: scale(0.9) translateY(5px);
    }
    74% {
      opacity: 0;
      transform: scale(0.4) translateY(40px);
    }
    75%, 79% {
      opacity: 0;
      transform: scale(0.4) translateY(-20px);
    }
    88%, 100% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
  }
  @keyframes trackBallSlide {
    0% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
    6% {
      opacity: 1;
      transform: scale(0.9) translateY(5px);
    }
    14% {
      opacity: 0;
      transform: scale(0.4) translateY(40px);
    }
    15%, 19% {
      opacity: 0;
      transform: scale(0.4) translateY(-20px);
    }
    28%, 29.99% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
    30% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
    36% {
      opacity: 1;
      transform: scale(0.9) translateY(5px);
    }
    44% {
      opacity: 0;
      transform: scale(0.4) translateY(40px);
    }
    45%, 49% {
      opacity: 0;
      transform: scale(0.4) translateY(-20px);
    }
    58%, 59.99% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
    60% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
    66% {
      opacity: 1;
      transform: scale(0.9) translateY(5px);
    }
    74% {
      opacity: 0;
      transform: scale(0.4) translateY(40px);
    }
    75%, 79% {
      opacity: 0;
      transform: scale(0.4) translateY(-20px);
    }
    88%, 100% {
      opacity: 1;
      transform: scale(1) translateY(-20px);
    }
  }
`;
