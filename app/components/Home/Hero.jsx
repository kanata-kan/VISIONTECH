/* eslint-disable react/no-unescaped-entities */
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from 'react-icons/ai';
import './Hero.css'; // يجب توفير هذا الملف بالطبع
import Lottie from 'lottie-react';
import pcAnimation from '../../Animation/Animation - 1.json';

export default function Hero() {
  const [isFullSize, setIsFullSize] = useState(false);
  const toggleFullSize = () => {
    setIsFullSize(!isFullSize);
  };

  return (
    <section>
      <div className='section-left'>
        <div className='img-icon' onClick={toggleFullSize}>
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isFullSize ? 1.4 : 0.8, opacity: 0.8 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src='photoP.jpg'
            alt='kanata'
            style={{ cursor: 'pointer' }}
          />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ lineHeight: '0.8' }}
        >
          VisionTech <br />{' '}
          <span style={{ fontSize: '24px' }}>---- Marrakech ----</span>
        </motion.h1>
        <p>
          Bienvenue chez VisionTechMarrakech VisionTechMarrakech est votre
          partenaire de confiance à Marrakech pour l'installation d'antennes, de
          paraboles,Installation wifi, de caméras de surveillance et de systèmes
          de sécurité. Avec plus de 10 ans d'expérience, nous nous engageons à
          vous offrir des produits de haute qualité et des services adaptés à
          vos besoins spécifiques, que vous soyez un particulier
          ou une entreprise.
        </p>
        <div className='social-media-icons'>
          <a
            href='https://twitter.com/your_twitter_username'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillTwitterCircle className='icon icon-twitter' />
          </a>

          <a
            href='https://www.instagram.com/your_instagram_username'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillInstagram className='icon icon-instagram' />
          </a>

          <a
            href='https://www.facebook.com/your_facebook_page'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillFacebook className='icon icon-facebook' />
          </a>

          <a
            href='https://www.linkedin.com/in/your_linkedin_profile'
            target='_blank'
            rel='noopener noreferrer'
          >
            <AiFillLinkedin className='icon icon-linkedin' />
          </a>
        </div>
      </div>
      <div className='section-right'>
        {' '}
        <Lottie
          className='animation'
          style={{ marginRight: 10, width: 350 }}
          animationData={pcAnimation}
          speed={1} // تعديل سرعة التشغيل هنا
        />
      </div>
    </section>
  );
}
