import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'

// only homepage component gets access to the history prop in routing
// prop tunnelling is bad practice
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;