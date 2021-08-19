import styled from 'styled-components';
import leftGraphics from 'assets/headerLeftGraphics.svg';
import rightGraphics from 'assets/headerRightGraphics.svg';
import aboutImage from 'assets/aboutImage.svg';
import aboutBigBlueCircle from 'assets/aboutBigBlueCircle.svg';
import aboutSmallCircle from 'assets/aboutSmallCircle.svg';

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

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 65px auto 130px;
  grid-template-areas:
    'menu'
    'content'
    'scroll';

  :before {
    content: "";
    position: absolute;
    width: 347px;
    height: 410px;
    top: 60px;
    left: -210px;
    background: url(${leftGraphics}) center no-repeat;
  }

  :after {
    content: "";
    position: absolute;
    width: 347px;
    height: 410px;
    bottom: 120px;
    right: -210px;
    background: url(${rightGraphics}) center no-repeat;
    z-index: -1;
  }
`;


export const MenuContainer = styled.div`
  grid-area: menu;
  height: 65px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    'left center right';
`;

export const Menu = styled.div`
  grid-area: center;

  place-self: center;

  display: grid;
  grid-template-columns: repeat(7, 100px);
  grid-template-rows: 1fr;
  grid-template-areas:
    'button button button button button button button';
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

  :hover {
    color: #EB5B49;
  }
`;

export const ApplyButton = styled.button`
  grid-area: right;

  place-self: center;
  width: 135px;

  border: 0;

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

export const HeaderContent = styled.div`
  grid-area: content;
  place-self: center;
`;

export const HeaderTitle = styled.div`
  width: 553px;

  font-size: 82px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: 0;
  text-align: center;

  color: #283583;
`;

export const HeaderMessage = styled.div`
  justify-self: center;

  margin-top: 60px;
  width: 553px;

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0;
  text-align: center;

  color: #818182;
`;

export const Scroll = styled.div`
  grid-area: scroll;
  place-self: center;
`;


export const About = styled.div`
  grid-area: about;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'about-content';

  :before {
    content: "";
    position: absolute;
    width: 187px;
    height: 187px;
    top: 1520px;
    left: -115px;
    background: url(${aboutBigBlueCircle}) center no-repeat;
  }

  :after {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    bottom: -300px;
    right: 150px;
    background: url(${aboutSmallCircle}) center no-repeat;
  }
`;

export const AboutImage = styled.div`
  grid-area: about-content;

  align-self: normal;
  justify-self: center;

  margin-top: 100px;

  width: 458px;
  height: 358px;
  background: url(${aboutImage}) center no-repeat;
`;

export const AboutContent = styled.div`
  grid-area: about-content;

  place-self: center;

  margin-top: 300px;
  padding: 0 55px 0 55px;
  text-align: center;

  max-width: 1140px;
`;

export const AboutButton = styled.button`
  grid-area: about-content;

  align-self: end;
  justify-self: center;
  width: 200px;

  border: 0;

  margin-bottom: 100px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
  background: #283583;
  box-shadow: 0 7px 20px rgba(144, 144, 144, 0.798432);
  border-radius: 15px;
`;

export const Team = styled.div``;

export const Process = styled.div``;

export const Stats = styled.div``;

export const News = styled.div``;

export const Apply = styled.div``;

export const Footer = styled.div``;

export const Background = styled.div``;
