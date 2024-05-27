import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutPage = () => (
  <AboutContainer>
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      About Me
    </motion.h2>
    <motion.p
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      I am a freelance fashion print designer with a passion for creating beautiful and unique designs. My work spans across various mediums, and I take pride in delivering high-quality results.
    </motion.p>
  </AboutContainer>
);

const AboutContainer = styled.div`
  padding: 2rem;
  background: #fff;
  color: #333;
`;

export default AboutPage;
