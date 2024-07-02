'use client';
import Link from 'next/link';
import './Footer.css';
export default function Footer() {
  return (
    <footer>
      <ul className='nav'>
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
      <p className='copyright'>© 2024 Abdelillah Wajid. All rights reserved.</p>
    </footer>
  );
}
