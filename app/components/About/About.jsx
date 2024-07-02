/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion } from 'framer-motion';
import './About.css';

export default function AboutUs() {
  return (
    <section className='about-section'>
      <div className='about-content'>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          About VisionTechMarrakech
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          VisionTechMarrakech is a leading company in the installation of
          antennas, satellite dishes, surveillance camera systems, and networks.
          We are committed to providing comprehensive, high-quality solutions
          that meet the needs of both individual and corporate clients. Our goal
          is to enhance security and connectivity by offering the latest
          technologies and specialized services. Our team includes a group of
          professional technicians who always strive to provide the best
          services and support to our customers.
        </motion.p>
      </div>
    </section>
  );
}
