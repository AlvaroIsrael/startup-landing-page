import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'header'
    'about'
    'team'
    'process'
    'stats'
    'news'
    'apply'
    'footer'
    'background';
`;

export const Header = styled.div`
  grid-area: header;

  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'menu menu menu'
    'leftImage content rightImage'
    'scroll scroll scroll';
`;

export const Menu = styled.div`
  grid-area: menu;

  place-self: center;
  height: 65px;
  width: 100vw;

  display: grid;
  grid-template-columns: 90px;
  grid-template-rows: 1fr;
  grid-template-areas:
    'button button button button button button button applyButton';
`;

export const Button = styled.button <{ active?: boolean }>`
  place-self: center;
  height: 30px;

  border: 0;
  background-color: #ffffff;

  font-size: ${props => props.active ? '20px' : '14px'};
  font-style: normal;
  font-weight: 400;
  line-height: ${props => props.active ? '28px' : '20px'};
  letter-spacing: 0;
  text-align: center;

  color: ${props => props.active ? '#EB5B49' : '#000000'};
  text-transform: ${props => props.active ? 'uppercase' : 'unset'};
`;

export const ApplyButton = styled.div`
  grid-area: applyButton;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0;
  text-align: center;

  color: #ffffff;
  background: #EB5B49;
  box-shadow: 0 4px 20px rgba(203, 64, 47, 0.341542);
  border-radius: 15px;
`;

export const LeftImage = styled.div``;

export const RightImage = styled.div``;

export const Content = styled.div``;

export const Scroll = styled.div``;


export const About = styled.div``;

export const Team = styled.div``;

export const Process = styled.div``;

export const Stats = styled.div``;

export const News = styled.div``;

export const Apply = styled.div``;

export const Footer = styled.div``;

export const Background = styled.div``;
