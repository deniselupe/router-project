import React from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const About = () => {
  useDocumentTitle('About Page');

  return (
    <h2>About Page</h2>
  );
};

export default About;
