import React from 'react';
import {
  About, AboutButton, AboutContent, AboutImage,
  ApplyButton,
  Button,
  Container,
  Header, HeaderContent,
  HeaderMessage,
  HeaderTitle,
  Menu,
  MenuContainer, Scroll, TeamContent,
  Team, TeamTitle, TeamMessage, TeamMemberLeft, TeamMemberRight, IconMemberLeft,
  IconMemberRight,
} from 'pages/Landing/styles';
import ScrollDown from 'components/ScrollDown';

const Landing: React.FC = () => {
  return (
    <Container>
      <Header>
        <MenuContainer>
          <></>
          <Menu>
            <Button>Team</Button>
            <Button>About us</Button>
            <Button>Process</Button>
            <Button active>Startup</Button>
            <Button>Explication</Button>
            <Button>News</Button>
            <Button>Contact</Button>
          </Menu>
          <ApplyButton>Apply</ApplyButton>
        </MenuContainer>
        <HeaderContent>
          <HeaderTitle>Welcome to Website</HeaderTitle>
          <HeaderMessage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus odio. Nam gravida
            diam eros, non ultricies velit varius ut.</HeaderMessage>
        </HeaderContent>
        <Scroll><ScrollDown /></Scroll>
      </Header>
      <About>
        <AboutImage />
        <AboutContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt convallis dignissim. Integer
          convallis diam tortor, a blandit quam dignissim sed. Maecenas semper lobortis enim quis tincidunt. Donec quis
          ultrices orci. Suspendisse rutrum sapien ac lobortis suscipit. Nullam pellentesque fringilla est, in efficitur
          nisl porta eu. Donec elementum condimentum sem non bibendum.n pellentesque dolor sit amet nisi lacinia
          euismod. Mauris elementum turpis sem, ut laoreet purus porta ut. Suspendisse posuere purus id nunc eleifend,
          id condimentum nulla tempus. Donec tortor sem, efficitur a laoreet ut, lacinia ac ante
        </AboutContent>
        <AboutButton>Discover Us</AboutButton>
      </About>
      <Team>
        <TeamContent>
          <TeamTitle>Team</TeamTitle>
          <TeamMessage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus odio. Nam gravida
            diam eros, non ultricies velit
            varius ut.</TeamMessage>
          <IconMemberLeft />
          <TeamMemberLeft>
            <p>Member 1</p>
            <p>In pellentesque dolor sit amet nisi lacinia euismod. Mauris elementum turpis sem, ut laoreet purus porta
              ut. Suspendisse posuere purus id nunc eleifend, id condimentum nulla tempus. Donec tortor sem, efficitur a
              laoreet ut, lacinia ac ante. Nullam vel neque suscipit, pulvinar arcu vel, interdum enim.</p>
            <AboutButton>Discover Member</AboutButton>
          </TeamMemberLeft>
          <IconMemberRight />
          <TeamMemberRight>
            <p>Member 2</p>
            <p>In pellentesque dolor sit amet nisi lacinia euismod. Mauris elementum turpis sem, ut laoreet purus porta
              ut. Suspendisse posuere purus id nunc eleifend, id condimentum nulla tempus. Donec tortor sem, efficitur a
              laoreet ut, lacinia ac ante. Nullam vel neque suscipit, pulvinar arcu vel, interdum enim.</p>
            <AboutButton>Discover Member</AboutButton>
          </TeamMemberRight>
        </TeamContent>
      </Team>
    </Container>
  );
};

export default Landing;
