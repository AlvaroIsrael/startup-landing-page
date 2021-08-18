import React from 'react';
import { ApplyButton, Button, Container, Header, Menu } from 'pages/Landing/styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Header>
        <Menu>
          <Button>Team</Button>
          <Button>About us</Button>
          <Button>Process</Button>
          <Button active={true}>Startup</Button>
          <Button>Explication</Button>
          <Button>News</Button>
          <Button>Contact</Button>
          <ApplyButton>Apply</ApplyButton>
        </Menu>
      </Header>
    </Container>
  );
};

export default Landing;
