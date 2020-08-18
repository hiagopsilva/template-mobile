import React from 'react';

import {Container} from './styles';
import Welcome from '../../components/Welcome';

const Home: React.FC = () => {
  return (
    <Container>
      <Welcome />
    </Container>
  );
};

export default Home;
