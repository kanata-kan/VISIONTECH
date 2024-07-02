'use client';
import { useState } from 'react';
import './Main.css';
import { arrFeltrData } from './arrFeltrData';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Main() {
  const [active, setActive] = useState('all');
  const [filteredData, setFilteredData] = useState(arrFeltrData);

  function handleFilter(category) {
    setActive(category);
    if (category === 'all') {
      setFilteredData(arrFeltrData);
    } else {
      const filtered = arrFeltrData.filter(item =>
        item.category.includes(category),
      );
      setFilteredData(filtered);
    }
  }

  return (
    <section>
      <div className='section-left'>
        <button
          className={active === 'all' ? 'active' : null}
          onClick={() => handleFilter('all')}
        >
          All services
        </button>
        <button
          onClick={() => handleFilter('sci')}
          className={active === 'sci' ? 'active' : null}
        >
          Surveillance cameras installation
        </button>
        <button
          onClick={() => handleFilter('sat')}
          className={active === 'sat' ? 'active' : null}
        >
          Satellite & TV installation
        </button>
        <button
          onClick={() => handleFilter('IPTV')}
          className={active === 'IPTV' ? 'active' : null}
        >
          IP TV
        </button>
      </div>
      <div className='section-right'>
        {Array.isArray(filteredData) && filteredData.length > 0 ? (
          filteredData.map(item => (
            <motion.div
              key={item.id}
              className='card'
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image width={400} height={400} src={item.Image} alt='' />
              <div className='contant'>
                <h2 className='title-card'>{item.title}</h2>
                <p className='text'>{item.description}</p>
                <div className='box'>
                  <div className='bm-1'>
                    <a href={item.link} target='_blank'>
                      <p className='icon-link iconLink' />
                    </a>
                    <a href={item.github} target='_blank'>
                      <p className='icon-github iconLink' />
                    </a>
                  </div>
                  <div className='bm-2'>
                    <p>more</p>
                    <span className='icon-arrow-thin-right' />
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </section>
  );
}
