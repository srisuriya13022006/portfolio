// Certificates.js (Section for displaying certificates)

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificatesContainer = styled.section`
  padding: 60px 20px;
  background-color: #f0f4f8;
  text-align: center;
`;

const CertificatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const CertificateItem = styled(motion.div)`
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
  }
`;

const Certificates = () => {
  return (
    <CertificatesContainer id="certificates">
      <CertificatesGrid>
        <CertificateItem whileHover={{ scale: 1.1 }}>
          <h3>Java Certification</h3>
          <p>Code Gallata Platform</p>
        </CertificateItem>
        {/* Add more certificates */}
      </CertificatesGrid>
    </CertificatesContainer>
  );
};

export default Certificates;
