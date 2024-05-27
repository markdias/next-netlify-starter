import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactPage = () => (
  <ContactContainer>
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Contact Me
    </motion.h2>
    <motion.form
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FormField>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </FormField>
      <FormField>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </FormField>
      <FormField>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required />
      </FormField>
      <SubmitButton type="submit">Send</SubmitButton>
    </motion.form>
  </ContactContainer>
);

const ContactContainer = styled.div`
  padding: 2rem;
  background: #fff;
  color: #333;
`;

const FormField = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input, textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

export default ContactPage;
