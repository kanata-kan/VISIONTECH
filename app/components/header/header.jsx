'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiSun, FiMoon, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

export default function Header() {
  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('switchTheme') ?? 'dark';
    setTheme(storedTheme);
    if (storedTheme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('switchTheme', theme);
  }, [theme]);

  return (
    <header>
      <motion.button
        className='menu mood'
        onClick={() => setShowModel(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiMenu />
      </motion.button>

      <nav>
        <ul>
          <li>
            <Link href='' style={{ fontSize: '16px', color: 'orange' }}>
              Home
            </Link>
          </li>
          <li>
            <Link href=''>About</Link>
          </li>
          <li>
            <Link href=''>Services</Link>
          </li>
          <li>
            <Link href=''>Contact</Link>
          </li>
        </ul>
      </nav>

      <AnimatePresence>
        {showModel && (
          <motion.div
            className='fixed'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul>
              <li>
                <motion.button
                  className='closModel icon-clos'
                  onClick={() => setShowModel(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX />
                </motion.button>
              </li>
              <li>
                <Link href='' style={{ fontSize: '16px', color: 'orange' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href=''>About</Link>
              </li>
              <li>
                <Link href=''>Services</Link>
              </li>
              <li>
                <Link href=''>Contact</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className='mood'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </motion.button>
    </header>
  );
}
