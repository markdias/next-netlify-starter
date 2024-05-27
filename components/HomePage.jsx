import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HomePage = () => (
  <HomeContainer>
    <HeroSection>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroImage src="path/to/hero-image.jpg" alt="Hero" />
      </motion.div>
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to My Portfolio
      </motion.h1>
    </HeroSection>
  </HomeContainer>
);

const HomeContainer = styled.div`
  text-align: center;
`;

const HeroSection = styled.div`
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
`;

export default HomePage;
