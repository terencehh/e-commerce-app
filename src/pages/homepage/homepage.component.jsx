import React from 'react';
import Directory from '../../components/directory/directory.component'

import { HomePageContainer } from './homepage.styles.jsx';

// only homepage component gets access to the history prop in routing
// prop tunnelling is bad practice
const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;